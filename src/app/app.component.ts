import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { HttpService } from './services/http-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
	constructor(
		private httpService: HttpService,
		private sanitizer: DomSanitizer
	) {}

	title = 'best-weather-on-earth';

  	perfectWeatherConditions = {
		male: {
			temperature: 21,
			humidity: 50
		},
		female: {
			temperature: 22,
			humidity: 50
		}
  	}

	weatherData: Array<any> = []
	bestStation: any
	suitableStations: Array<any> = []
	customTemperature: number
	customHumidity: number
	gender: string = 'male'
	  

  	ngOnInit() {
  		this.getWeather()
  	}

	
	/**
	 * Pull weather data for all stations in the world (presented in the API)
	 */
  	getWeather() {
  		this.httpService.getWeatherWorld().subscribe(resp => {
  			this.weatherData = resp['list']

  			this.findBestWeather()
  		})
	}


	/**
	 * Filter weather data within the range
	 */
  	findBestWeather(temperature: number = this.customTemperature || this.perfectWeatherConditions[this.gender].temperature, humidity: number = this.customHumidity || this.perfectWeatherConditions[this.gender].humidity) {
		let perfectMatch = this.weatherData.filter(station => {
			return (
				station.main.temp === temperature &&
				station.main.humidity === humidity
			)
		})

		this.bestStation = perfectMatch[0]
		
		this.suitableStations = this.weatherData.filter(station => {
  			return (
  				this.isInRange(parseInt(station.main.temp), temperature, 1) &&
  				this.isInRange(station.main.humidity, humidity, 5)
  			)
		})

		console.log(this.suitableStations)
	}


	/**
	 * Resolve weather icon for station
	 * @param station
	 */
	getWeatherIcon(station) {
		let iconHTML

		switch (true) {
			case /^800/gm.test(station.weather[0].id):
				iconHTML = '<i class="icon-sun"></i>'
				break;
			
			case /^8/gm.test(station.weather[0].id):
				iconHTML = '<i class="icon-clouds"></i>'
				break;

			case /^7/gm.test(station.weather[0].id):
				iconHTML = '<i class="icon--cloud-sun-fog"></i>'
				break;

			case /^6/gm.test(station.weather[0].id):
				iconHTML = '<i class="icon-cloud-snowflakes"></i>'
				break;

			case /^5/gm.test(station.weather[0].id):
				iconHTML = '<i class="icon-cloud-rain"></i>'
				break;

			case /^3/gm.test(station.weather[0].id):
				iconHTML = '<i class="icon-cloud-sun-snow"></i>'
				break;

			case /^2/gm.test(station.weather[0].id):
				iconHTML = '<i class="icon-cloud-lightning"></i>'
				break;
		}

		return this.sanitizer.bypassSecurityTrustHtml(iconHTML)
	}
	  

	/**
	 * Applies custom weather values into variables
	 * @param event 
	 */
	setCustomWeather(event) {
		let value = event.target.value

		switch(event.target.id) {
			case 'custom-temp':
				this.customTemperature = parseInt(value)
				break;

			case 'custom-humid':
				this.customHumidity = parseInt(value)
				break;
		}

		this.findBestWeather()
	}


	/**
	 * Set prefered gender
	 * @param event
	 */
	setGender(event) {
		this.gender = event.target.value
	}


	/**
	 * Check if given number is in the given range
	 * @param {number} value 
	 * @param {number} dataToCompare 
	 * @param {number} deviation 
	 * @returns {boolean}
	 */
  	isInRange(value: number, dataToCompare: number, deviation: number) {
  		return (value >= dataToCompare - deviation) && (value <= dataToCompare + deviation)
	}
}

import { Component } from '@angular/core';
import { HttpService } from './services/http-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
	constructor(
		private httpService: HttpService
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

import { Component } from '@angular/core';
import { HttpService } from './services/http-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
	constructor(
		private httpService: HttpService
	) {}

	title = 'best-weather-on-earth';

  	perfectWeatherConditions = {
  		temp: {
  			male: 21,
  			female: 22
  		},
  		humidity: {
  			male: 50,
  			female: 50
  		},
  		temperature: 21,
  		humid: 50
  	}

	weatherData: Array<any> = []
	bestStation: any
	suitableStations: Array<any> = []
	  

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
  	findBestWeather(temperature: number = this.perfectWeatherConditions.temperature, humidity: number = this.perfectWeatherConditions.humid) {
  		this.suitableStations = this.weatherData.filter(station => {
  			return (
  				this.isInRange(station.main.temp, temperature, 2) &&
  				this.isInRange(station.main.humidity, humidity, 8)
  			)
		})
		  
  		console.log(this.suitableStations)
	}
	  

	recalculateWeather(event) {
		let value = event.target.value

		switch(event.target.id) {
			case 'custom-temp':
				this.findBestWeather(value)
				break;

			case 'custom-humid':
				this.findBestWeather(value)
				break;
		}
	}


	/**
	 * Check if given number is in the given range
	 * @param {number} value 
	 * @param {number} dataToCompare 
	 * @param {number} deviation 
	 * @returns {boolean}
	 */
  	isInRange(value, dataToCompare, deviation) {
  		return value >= dataToCompare - deviation && value <= dataToCompare + deviation
	}
}

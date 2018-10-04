import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { HttpService } from './services/http-service.service'
import * as d3 from 'd3'

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
	suitableStationsToShow: number = 5
	haveMoreStationsToLoad: boolean = true
	customTemperature: number
	customHumidity: number
	gender: string = 'male'
	dataLoaded: boolean = false
	  

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
			  
			this.dataLoaded = true
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
	 * Get forecast for city (by ID)
	 * @param event
	 * @param {number} cityID
	 */
	getForecast(event, cityID: number) {
		this.httpService.getWeatherForecast(cityID).subscribe(resp => {
			event.target.style.display = 'none'

			this.drawForecast(resp, cityID)
		})
	}


	/**
	 * Draw forecast chart
	 * @param forecastData
	 */
	drawForecast(forecastData, svgID) {
		let data = []

		for (let i in forecastData.list) {
		  	data.push({
		    	date: new Date(forecastData.list[i].dt),
		        value: this.convertKelvinsToCelcius(forecastData.list[i].main.temp)
		    })
		}

		let svgWidth = 200, svgHeight = 38
		let margin = {
			top: 5,
			right: 0,
			bottom: 5,
			left: 20
		}
		let width = svgWidth - margin.left - margin.right
		let height = svgHeight - margin.top - margin.bottom
		let svg = d3.select(`#forecast-${svgID}`)
		 	.attr("width", svgWidth)
			.attr("height", svgHeight)
			.attr("style", "display: block") 

		let g = svg.append("g")
		   	.attr("transform", 
		      "translate(" + margin.left + "," + margin.top + ")"
		   	)

		let x = d3.scaleTime().rangeRound([0, width])
		let y = d3.scaleLinear().rangeRound([height, 0])

		let line = d3.line()
   			.x(function(d) {
   				return x(d.date)
   			})
   			.y(function(d) {
   				return y(d.value)
   			})

		x.domain(d3.extent(data, function(d) {
			return d.date
		}))

		y.domain(d3.extent(data, function(d) {
			return d.value
		}))

		// markup X axis
   		// g.append("g")
   		// 	.attr("transform", "translate(0," + height + ")")
   		// 	.call(d3.axisBottom(x))
   		// 	.select(".domain")
   		// 	.remove()

   		// markup Y axis
   		g.append("g")
			.call(d3.axisLeft(y))
			.append("text")
			.attr("fill", "#000")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", "0.71em")
			.attr("text-anchor", "end")

		// draw chart
   		g.append("path")
			.datum(data)
			.attr("fill", "none")
			.attr("stroke", "steelblue")
			.attr("stroke-linejoin", "round")
			.attr("stroke-linecap", "round")
			.attr("stroke-width", 1.5)
			.attr("d", line)
	}


	/**
	 * Convert kelvins to celsius
	 * @param kelvins
	 * @description For some reason openweathermap API return forecast in kelvins, so we need to convert them 
	 */
	convertKelvinsToCelcius(kelvins) {
		return parseInt(kelvins) - 273
	}
	  

	/**
	 * Applies custom weather values into letiables
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
	 * Load more suitable stations
	 */
	showMoreStations() {
		if(this.suitableStationsToShow < this.suitableStations.length) {
			this.suitableStationsToShow += 5
		} else {
			this.haveMoreStationsToLoad = false
		}
	}


	/**
	 * Set prefered gender
	 * @param event
	 */
	setGender(event) {
		this.gender = event.target.value

		this.findBestWeather()

		// do bootstrap work: change classes of radio buttons
		// this way we dont need to load bootstrap js and jquery
		// P.S. was lazy to add polyfill for NodeList.forEach()
		document.querySelectorAll('.gender-selector label')[0].classList.remove('active')
		document.querySelectorAll('.gender-selector label')[1].classList.remove('active')
		event.target.parentNode.classList.add('active')
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

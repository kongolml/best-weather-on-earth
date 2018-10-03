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


  	ngOnInit() {
  		this.getWeather()
  	}


  	getWeather() {
  		this.httpService.getWeatherByCityName('Kiev').subscribe(resp => {
  			console.log(resp)
  		})
  	}
}
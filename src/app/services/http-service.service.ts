import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
  	private http: HttpClient
  ) { }


  OPEN_WEATHER_API_KEY: string = '6ce1d23a23d2578091f8ba9531135924'


  getWeatherWorld() {
  	const boundingBox = '12,32,15,37,10'
    const zoom = '8' // this will scan more stations and allow us to find the perfect one
  	let url = `https://api.openweathermap.org/data/2.5/box/city?bbox=${boundingBox},${zoom}&appid=${this.OPEN_WEATHER_API_KEY}`

  	return this.http.get(url)
  }


  // wont be used because of free API limitations :(
  getWeatherForecast(cityID: number) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${this.OPEN_WEATHER_API_KEY}`

    return this.http.get(url)
  }

}

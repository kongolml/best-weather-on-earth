import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
  	private http: HttpClient
  ) { }


  OPEN_WEATHER_API_KEY: string = '87344724acbcbb242a4753492a391ee6'


  getWeatherWorld() {
  	const boundingBox = '-180,-90,180,90'
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

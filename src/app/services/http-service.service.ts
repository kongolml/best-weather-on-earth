import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
  	private http: HttpClient
  ) { }


  getWeatherWorld() {
  	const apiKey = '87344724acbcbb242a4753492a391ee6'
  	const boundingBox = '-180,-90,180,90'
  	let url = `https://api.openweathermap.org/data/2.5/box/city?bbox=${boundingBox}&appid=${apiKey}`

  	return this.http.get(url)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
  	private http: HttpClient
  ) { }


  getWeatherByCityName(cityName: string) {
  	const apiKey = '87344724acbcbb242a4753492a391ee6'
  	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

  	return this.http.get(url)
  }

}

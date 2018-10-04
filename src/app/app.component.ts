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

	dummyData1 = {"cod":"200","message":0.0032,"cnt":36,"list":[{"dt":1487246400,"main":{"temp":286.67,"temp_min":281.556,"temp_max":286.67,"pressure":972.73,"sea_level":1046.46,"grnd_level":972.73,"humidity":75,"temp_kf":5.11},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.81,"deg":247.501},"sys":{"pod":"d"},"dt_txt":"2017-02-16 12:00:00"},{"dt":1487257200,"main":{"temp":285.66,"temp_min":281.821,"temp_max":285.66,"pressure":970.91,"sea_level":1044.32,"grnd_level":970.91,"humidity":70,"temp_kf":3.84},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.59,"deg":290.501},"sys":{"pod":"d"},"dt_txt":"2017-02-16 15:00:00"},{"dt":1487268000,"main":{"temp":277.05,"temp_min":274.498,"temp_max":277.05,"pressure":970.44,"sea_level":1044.7,"grnd_level":970.44,"humidity":90,"temp_kf":2.56},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.41,"deg":263.5},"sys":{"pod":"n"},"dt_txt":"2017-02-16 18:00:00"},{"dt":1487278800,"main":{"temp":272.78,"temp_min":271.503,"temp_max":272.78,"pressure":969.32,"sea_level":1044.14,"grnd_level":969.32,"humidity":80,"temp_kf":1.28},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.24,"deg":205.502},"sys":{"pod":"n"},"dt_txt":"2017-02-16 21:00:00"},{"dt":1487289600,"main":{"temp":273.341,"temp_min":273.341,"temp_max":273.341,"pressure":968.14,"sea_level":1042.96,"grnd_level":968.14,"humidity":85,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":76},"wind":{"speed":3.59,"deg":224.003},"sys":{"pod":"n"},"dt_txt":"2017-02-17 00:00:00"},{"dt":1487300400,"main":{"temp":275.568,"temp_min":275.568,"temp_max":275.568,"pressure":966.6,"sea_level":1041.39,"grnd_level":966.6,"humidity":89,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":76},"wind":{"speed":3.77,"deg":237.002},"rain":{"3h":0.32},"sys":{"pod":"n"},"dt_txt":"2017-02-17 03:00:00"},{"dt":1487311200,"main":{"temp":276.478,"temp_min":276.478,"temp_max":276.478,"pressure":966.45,"sea_level":1041.21,"grnd_level":966.45,"humidity":97,"temp_kf":0},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":3.81,"deg":268.005},"rain":{"3h":4.9},"sys":{"pod":"n"},"dt_txt":"2017-02-17 06:00:00"},{"dt":1487322000,"main":{"temp":276.67,"temp_min":276.67,"temp_max":276.67,"pressure":967.41,"sea_level":1041.95,"grnd_level":967.41,"humidity":100,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":64},"wind":{"speed":2.6,"deg":266.504},"rain":{"3h":1.37},"sys":{"pod":"d"},"dt_txt":"2017-02-17 09:00:00"},{"dt":1487332800,"main":{"temp":278.253,"temp_min":278.253,"temp_max":278.253,"pressure":966.98,"sea_level":1040.89,"grnd_level":966.98,"humidity":95,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":3.17,"deg":261.501},"rain":{"3h":0.12},"sys":{"pod":"d"},"dt_txt":"2017-02-17 12:00:00"},{"dt":1487343600,"main":{"temp":276.455,"temp_min":276.455,"temp_max":276.455,"pressure":966.38,"sea_level":1040.17,"grnd_level":966.38,"humidity":99,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":3.21,"deg":268.001},"rain":{"3h":2.12},"sys":{"pod":"d"},"dt_txt":"2017-02-17 15:00:00"},{"dt":1487354400,"main":{"temp":275.639,"temp_min":275.639,"temp_max":275.639,"pressure":966.39,"sea_level":1040.65,"grnd_level":966.39,"humidity":95,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":3.17,"deg":258.001},"rain":{"3h":0.7},"snow":{"3h":0.0775},"sys":{"pod":"n"},"dt_txt":"2017-02-17 18:00:00"},{"dt":1487365200,"main":{"temp":275.459,"temp_min":275.459,"temp_max":275.459,"pressure":966.3,"sea_level":1040.8,"grnd_level":966.3,"humidity":96,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":3.71,"deg":265.503},"rain":{"3h":1.16},"snow":{"3h":0.075},"sys":{"pod":"n"},"dt_txt":"2017-02-17 21:00:00"},{"dt":1487376000,"main":{"temp":275.035,"temp_min":275.035,"temp_max":275.035,"pressure":966.43,"sea_level":1041.02,"grnd_level":966.43,"humidity":99,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":3.56,"deg":273.5},"rain":{"3h":1.37},"snow":{"3h":0.1525},"sys":{"pod":"n"},"dt_txt":"2017-02-18 00:00:00"},{"dt":1487386800,"main":{"temp":274.965,"temp_min":274.965,"temp_max":274.965,"pressure":966.36,"sea_level":1041.17,"grnd_level":966.36,"humidity":97,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":2.66,"deg":285.502},"rain":{"3h":0.79},"snow":{"3h":0.52},"sys":{"pod":"n"},"dt_txt":"2017-02-18 03:00:00"},{"dt":1487397600,"main":{"temp":274.562,"temp_min":274.562,"temp_max":274.562,"pressure":966.75,"sea_level":1041.57,"grnd_level":966.75,"humidity":98,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":1.46,"deg":276.5},"rain":{"3h":0.08},"snow":{"3h":0.06},"sys":{"pod":"n"},"dt_txt":"2017-02-18 06:00:00"},{"dt":1487408400,"main":{"temp":275.648,"temp_min":275.648,"temp_max":275.648,"pressure":967.21,"sea_level":1041.74,"grnd_level":967.21,"humidity":99,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":56},"wind":{"speed":1.5,"deg":251.008},"rain":{"3h":0.02},"snow":{"3h":0.03},"sys":{"pod":"d"},"dt_txt":"2017-02-18 09:00:00"},{"dt":1487419200,"main":{"temp":277.927,"temp_min":277.927,"temp_max":277.927,"pressure":966.06,"sea_level":1039.98,"grnd_level":966.06,"humidity":95,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":0.86,"deg":244.004},"rain":{},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-18 12:00:00"},{"dt":1487430000,"main":{"temp":278.367,"temp_min":278.367,"temp_max":278.367,"pressure":964.57,"sea_level":1038.35,"grnd_level":964.57,"humidity":89,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":1.62,"deg":79.5024},"rain":{},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-18 15:00:00"},{"dt":1487440800,"main":{"temp":273.797,"temp_min":273.797,"temp_max":273.797,"pressure":964.13,"sea_level":1038.48,"grnd_level":964.13,"humidity":91,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.42,"deg":77.0026},"rain":{},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-18 18:00:00"},{"dt":1487451600,"main":{"temp":271.239,"temp_min":271.239,"temp_max":271.239,"pressure":963.39,"sea_level":1038.21,"grnd_level":963.39,"humidity":93,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.42,"deg":95.5017},"rain":{},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-18 21:00:00"},{"dt":1487462400,"main":{"temp":269.553,"temp_min":269.553,"temp_max":269.553,"pressure":962.39,"sea_level":1037.44,"grnd_level":962.39,"humidity":92,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.96,"deg":101.004},"rain":{},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-19 00:00:00"},{"dt":1487473200,"main":{"temp":268.198,"temp_min":268.198,"temp_max":268.198,"pressure":961.28,"sea_level":1036.51,"grnd_level":961.28,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.06,"deg":121.5},"rain":{},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-19 03:00:00"},{"dt":1487484000,"main":{"temp":267.295,"temp_min":267.295,"temp_max":267.295,"pressure":961.16,"sea_level":1036.45,"grnd_level":961.16,"humidity":86,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.17,"deg":155.005},"rain":{},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-19 06:00:00"},{"dt":1487494800,"main":{"temp":272.956,"temp_min":272.956,"temp_max":272.956,"pressure":962.03,"sea_level":1036.85,"grnd_level":962.03,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.66,"deg":195.002},"rain":{},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-19 09:00:00"},{"dt":1487505600,"main":{"temp":277.422,"temp_min":277.422,"temp_max":277.422,"pressure":962.23,"sea_level":1036.06,"grnd_level":962.23,"humidity":89,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.32,"deg":357.003},"rain":{},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-19 12:00:00"},{"dt":1487516400,"main":{"temp":277.984,"temp_min":277.984,"temp_max":277.984,"pressure":962.15,"sea_level":1035.86,"grnd_level":962.15,"humidity":87,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.58,"deg":48.5031},"rain":{},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-19 15:00:00"},{"dt":1487527200,"main":{"temp":272.459,"temp_min":272.459,"temp_max":272.459,"pressure":963.31,"sea_level":1037.81,"grnd_level":963.31,"humidity":90,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.16,"deg":75.5042},"rain":{},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-19 18:00:00"},{"dt":1487538000,"main":{"temp":269.473,"temp_min":269.473,"temp_max":269.473,"pressure":964.65,"sea_level":1039.76,"grnd_level":964.65,"humidity":83,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.12,"deg":174.002},"rain":{},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-19 21:00:00"},{"dt":1487548800,"main":{"temp":268.793,"temp_min":268.793,"temp_max":268.793,"pressure":965.92,"sea_level":1041.32,"grnd_level":965.92,"humidity":80,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.11,"deg":207.502},"rain":{},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-20 00:00:00"},{"dt":1487559600,"main":{"temp":268.106,"temp_min":268.106,"temp_max":268.106,"pressure":966.4,"sea_level":1042.18,"grnd_level":966.4,"humidity":85,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.67,"deg":191.001},"rain":{},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-20 03:00:00"},{"dt":1487570400,"main":{"temp":267.655,"temp_min":267.655,"temp_max":267.655,"pressure":967.4,"sea_level":1043.43,"grnd_level":967.4,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.61,"deg":194.001},"rain":{},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-20 06:00:00"},{"dt":1487581200,"main":{"temp":273.75,"temp_min":273.75,"temp_max":273.75,"pressure":968.84,"sea_level":1044.23,"grnd_level":968.84,"humidity":83,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.49,"deg":208.5},"rain":{},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-20 09:00:00"},{"dt":1487592000,"main":{"temp":279.302,"temp_min":279.302,"temp_max":279.302,"pressure":968.37,"sea_level":1042.52,"grnd_level":968.37,"humidity":83,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.46,"deg":252.001},"rain":{},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-20 12:00:00"},{"dt":1487602800,"main":{"temp":279.343,"temp_min":279.343,"temp_max":279.343,"pressure":967.9,"sea_level":1041.64,"grnd_level":967.9,"humidity":81,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.21,"deg":268.001},"rain":{},"snow":{},"sys":{"pod":"d"},"dt_txt":"2017-02-20 15:00:00"},{"dt":1487613600,"main":{"temp":274.443,"temp_min":274.443,"temp_max":274.443,"pressure":968.19,"sea_level":1042.66,"grnd_level":968.19,"humidity":88,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":24},"wind":{"speed":3.27,"deg":257.501},"rain":{},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-20 18:00:00"},{"dt":1487624400,"main":{"temp":272.424,"temp_min":272.424,"temp_max":272.424,"pressure":968.38,"sea_level":1043.17,"grnd_level":968.38,"humidity":85,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":3.57,"deg":255.503},"rain":{},"snow":{},"sys":{"pod":"n"},"dt_txt":"2017-02-20 21:00:00"}],"city":{"id":6940463,"name":"Altstadt","coord":{"lat":48.137,"lon":11.5752},"country":"none"}}
	dummyWeather1 = {"cod":"200","calctime":0.3107,"cnt":15,"list":[{"id":2208791,"name":"Yafran","coord":{"lon":12.52859,"lat":32.06329},"main":{"temp":9.68,"temp_min":9.681,"temp_max":9.681,"pressure":961.02,"sea_level":1036.82,"grnd_level":961.02,"humidity":85},"dt":1485784982,"wind":{"speed":3.96,"deg":356.5},"rain":{"3h":0.255},"clouds":{"all":88},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}]},{"id":2208425,"name":"Zuwarah","coord":{"lon":12.08199,"lat":32.931198},"main":{"temp":15.36,"temp_min":15.356,"temp_max":15.356,"pressure":1036.81,"sea_level":1037.79,"grnd_level":1036.81,"humidity":89},"dt":1485784982,"wind":{"speed":5.46,"deg":30.0002},"clouds":{"all":56},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}]},{"id":2212771,"name":"Sabratah","coord":{"lon":12.48845,"lat":32.79335},"main":{"temp":15.31,"temp_min":15.306,"temp_max":15.306,"pressure":1037.05,"sea_level":1037.55,"grnd_level":1037.05,"humidity":100},"dt":1485784982,"wind":{"speed":6.71,"deg":28.5002},"clouds":{"all":92},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}]},{"id":2217362,"name":"Gharyan","coord":{"lon":13.02028,"lat":32.172218},"main":{"temp":11.23,"temp_min":11.231,"temp_max":11.231,"pressure":1004.23,"sea_level":1037.06,"grnd_level":1004.23,"humidity":90},"dt":1485784982,"wind":{"speed":3.86,"deg":16.5002},"rain":{"3h":1.29},"clouds":{"all":92},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}]},{"id":2216885,"name":"Zawiya","coord":{"lon":12.72778,"lat":32.75222},"main":{"temp":17,"pressure":1024,"humidity":55,"temp_min":17,"temp_max":17},"dt":1485784982,"wind":{"speed":3.6,"deg":10},"clouds":{"all":40},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]},{"id":2210247,"name":"Tripoli","coord":{"lon":13.18746,"lat":32.875191},"main":{"temp":16,"pressure":1025,"humidity":59,"temp_min":16,"temp_max":16},"dt":1485781822,"wind":{"speed":3.6,"deg":360},"clouds":{"all":40},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]},{"id":2210221,"name":"Tarhuna","coord":{"lon":13.6332,"lat":32.43502},"main":{"temp":17,"pressure":1024,"humidity":55,"temp_min":17,"temp_max":17},"dt":1485784982,"wind":{"speed":3.6,"deg":10},"clouds":{"all":40},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]},{"id":2215163,"name":"Masallatah","coord":{"lon":14,"lat":32.616669},"main":{"temp":12.86,"temp_min":12.856,"temp_max":12.856,"pressure":1000.17,"sea_level":1036.49,"grnd_level":1000.17,"humidity":73},"dt":1485784982,"wind":{"speed":4.81,"deg":16.5002},"rain":{"3h":0.39},"clouds":{"all":88},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}]},{"id":2219905,"name":"Al Khums","coord":{"lon":14.26191,"lat":32.648609},"main":{"temp":15.18,"temp_min":15.181,"temp_max":15.181,"pressure":1023.35,"sea_level":1036.01,"grnd_level":1023.35,"humidity":73},"dt":1485784982,"wind":{"speed":5.26,"deg":26.0002},"clouds":{"all":88},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}]},{"id":2208485,"name":"Zlitan","coord":{"lon":14.56874,"lat":32.467381},"main":{"temp":15.18,"temp_min":15.181,"temp_max":15.181,"pressure":1023.35,"sea_level":1036.01,"grnd_level":1023.35,"humidity":73},"dt":1485784982,"wind":{"speed":5.26,"deg":26.0002},"clouds":{"all":88},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}]},{"id":2563191,"name":"Birkirkara","coord":{"lon":14.46111,"lat":35.897221},"main":{"temp":14,"pressure":1023,"humidity":62,"temp_min":14,"temp_max":14},"dt":1485784991,"wind":{"speed":4.1,"deg":10,"var_beg":330,"var_end":30},"clouds":{"all":40},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]},{"id":2523650,"name":"Ragusa","coord":{"lon":14.71719,"lat":36.928242},"main":{"temp":14.54,"pressure":1022,"humidity":50,"temp_min":13,"temp_max":16},"dt":1485781816,"wind":{"speed":3.1,"deg":20,"var_beg":350,"var_end":60},"clouds":{"all":20},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}]},{"id":2523693,"name":"Pozzallo","coord":{"lon":14.84989,"lat":36.730541},"main":{"temp":14,"pressure":1022,"humidity":50,"temp_min":14,"temp_max":14},"dt":1485781816,"wind":{"speed":3.1,"deg":20,"var_beg":350,"var_end":60},"clouds":{"all":20},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}]},{"id":2524119,"name":"Modica","coord":{"lon":14.77399,"lat":36.84594},"main":{"temp":15.74,"pressure":1022,"humidity":47,"temp_min":14,"temp_max":17},"dt":1485785168,"wind":{"speed":2.1,"deg":0},"clouds":{"all":40},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]},{"id":2523581,"name":"Rosolini","coord":{"lon":14.94779,"lat":36.824242},"main":{"temp":15.62,"pressure":1022,"humidity":47,"temp_min":14,"temp_max":17},"dt":1485784979,"wind":{"speed":2.1,"deg":0},"clouds":{"all":40},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]}]}

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
	 * Get forecast for city (by ID)
	 * @param {number} cityID
	 */
	getForecast(cityID: number) {
		this.httpService.getWeatherForecast(cityID).subscribe(resp => {
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

		let svgWidth = 200, svgHeight = 50
		let margin = {
			top: 0,
			right: 0,
			bottom: 1,
			left: 20
		}
		let width = svgWidth - margin.left - margin.right
		let height = svgHeight - margin.top - margin.bottom
		let svg = d3.select(`#forecast-${svgID}`)
		 	.attr("width", svgWidth)
		 	.attr("height", svgHeight)

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

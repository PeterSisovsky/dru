import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';

const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const ICON_URLS = {
  '01d': 'assets/icons/icon_sun.svg',
  '02d': 'assets/icons/icon_sun_cloud.svg',
  '03d': 'assets/icons/icon_cloud.svg',
  '04d': 'assets/icons/icon_2_clouds.svg',
  '09d': 'assets/icons/icon_rain.svg',
  '10d': 'assets/icons/icon_rain_withsun.svg',
  '11d': 'assets/icons/icon_storm.svg',
  '13d': 'assets/icons/icon_snow.svg',
  '50d': 'assets/icons/icon_mist.svg',
  '01n': 'assets/icons/icon_moon.svg',
  '02n': 'assets/icons/icon_sun_cloud_n.svg',
  '03n': 'assets/icons/icon_cloud.svg',
  '04n': 'assets/icons/icon_2_clouds.svg',
  '09n': 'assets/icons/icon_rain.svg',
  '10n': 'assets/icons/icon_rain_n.svg',
  '11n': 'assets/icons/icon_storm.svg',
  '13n': 'assets/icons/icon_snow.svg',
  '50n': 'assets/icons/icon_mist.svg'
};

interface DayInfoModel {
  day?: string;
  temp: number;
  windSpeed: number;
  humidity: number;
  iconPath: string;
}

@Component({
  selector: 'app-rightnav',
  templateUrl: './rightnav.component.html',
  styleUrls: ['./rightnav.component.scss'],
  providers: [WeatherService],
})
export class RightnavComponent {
  apiKey = '1aaa748e04abf09763b3fd31efcc9d11'; /* secondary apiKey = 0dbfcc400a532cb8bb560009bdc4d663 */
  weather: any = {};
  city = 'Brno';
  code = 'CZ';
  now = Date.now();
  today: DayInfoModel;
  nextDays: DayInfoModel[];

  constructor(private http: HttpClient) {
    this.getTime();
    this.getWeather(this.city, this.code);
  }

  getTime(): void {
    setInterval(
      () => {
        this.now = Date.now();
      },
      1000
    );
  }

  storeWeather(apiData: any): void {
    const days = [0, 8, 16, 24]
      .map(index => apiData.list[index])
      .map(apiModel => ({
        day: apiModel.dt_txt,
        temp: apiModel.main.temp,
        windSpeed: apiModel.wind.speed,
        humidity: apiModel.main.humidity,
        iconPath: ICON_URLS[apiModel.weather[0].icon] || ICON_URLS['01d']
      }));
    this.today = days[0];
    this.nextDays = days.slice(1);
  }

  getWeather(city: string, code: string): void {
    this.http.get(ROOT_URL + city + ',' + code + '&APPID=' + this.apiKey + '&units=metric').subscribe(
      data => {
        this.storeWeather(data);
      }
    );
  }

  get isLoaded(): boolean {
    return this.today != null;
  }
}



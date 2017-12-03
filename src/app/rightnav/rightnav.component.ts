import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rightnav',
  templateUrl: './rightnav.component.html',
  styleUrls: ['./rightnav.component.scss'],
  providers: [WeatherService],
})


export class RightnavComponent implements OnInit {
  weather: any;
  weatherUpdate: any;
  isLoaded: Boolean;
  apiKey = '1aaa748e04abf09763b3fd31efcc9d11';
  // apiKey = '0dbfcc400a532cb8bb560009bdc4d663';
  readonly ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  obje: any = {};
  city: 'Brno';
  code;
  myDate;
  today = {
    temp: Number,
    windSpeed: Number,
    humidity: Number,
    iconPath: String,
  };
  secondDay = {
    day: Date,
    temp: Number,
    windSpeed: Number,
    humidity: Number,
    iconPath: String,
  };
  thirdDay = {
    day: Date,
    temp: Number,
    windSpeed: Number,
    humidity: Number,
    iconPath: String,
  };
  forthDay = {
    day: Date,
    temp: Number,
    windSpeed: Number,
    humidity: Number,
    iconPath: String,
  };
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.isLoaded = false;
    this.city = 'Brno';
    this.code = 'CZ';
    this.getTime();
    this.getWeather('Brno', 'CZ');
  }
  getTime(): void {
    setInterval(() => {
    if (this.obje !== this.weatherUpdate ) {
      console.log(this.obje);
      this.weatherUpdate = this.obje;
      // TODAY
      this.today.temp = /*Math.round*/(this.weatherUpdate.list[0].main.temp);
      this.today.windSpeed = this.weatherUpdate.list[0].wind.speed;
      this.today.humidity = this.weatherUpdate.list[0].main.humidity;
      this.today.iconPath = this.getIcon(this.weatherUpdate.list[0].weather[0].icon);
      // NEXT DAY
      this.secondDay.day = this.weatherUpdate.list[8].dt_txt;
      this.secondDay.temp = /*Math.round*/(this.weatherUpdate.list[8].main.temp);
      this.secondDay.windSpeed = this.weatherUpdate.list[8].wind.speed;
      this.secondDay.humidity = this.weatherUpdate.list[8].main.humidity;
      this.secondDay.iconPath = this.getIcon(this.weatherUpdate.list[8].weather[0].icon);
      // SECOND NEXT DAY
      this.thirdDay.day = this.weatherUpdate.list[16].dt_txt;
      this.thirdDay.temp = /*Math.round*/(this.weatherUpdate.list[16].main.temp);
      this.thirdDay.windSpeed = this.weatherUpdate.list[16].wind.speed;
      this.thirdDay.humidity = this.weatherUpdate.list[16].main.humidity;
      this.thirdDay.iconPath = this.getIcon(this.weatherUpdate.list[16].weather[0].icon);
      // THIRD NEXT DAY
      this.forthDay.day = this.weatherUpdate.list[24].dt_txt;
      this.forthDay.temp = /*Math.round*/(this.weatherUpdate.list[24].main.temp);
      this.forthDay.windSpeed = this.weatherUpdate.list[24].wind.speed;
      this.forthDay.humidity = this.weatherUpdate.list[24].main.humidity;
      this.forthDay.iconPath = this.getIcon(this.weatherUpdate.list[24].weather[0].icon);
      this.isLoaded = true;  // Dorobit vlastný interval, ktorý sa zastaví ak isLoaded = true
    }
    this.myDate = moment();
    }, 1000 );
  }
  getIcon(iconCode: string): any {
    switch (iconCode) {
      case '01d': {
        return 'assets/icons/icon_sun.svg';
      }
      case '02d': {
        return 'assets/icons/icon_sun_cloud.svg';
      }
      case '03d': {
        return 'assets/icons/icon_cloud.svg';
      }
      case '04d': {
        return 'assets/icons/icon_2_clouds.svg';
      }
      case '09d': {
        return 'assets/icons/icon_rain.svg';
      }
      case '10d': {
        return 'assets/icons/icon_rain_withsun.svg';
      }
      case '11d': {
        return 'assets/icons/icon_storm.svg';
      }
      case '13d': {
        return 'assets/icons/icon_snow.svg';
      }
      case '50d': {
        return 'assets/icons/icon_mist.svg';
      }
      case '01n': {
        return 'assets/icons/icon_moon.svg';
      }
      case '02n': {
        return 'assets/icons/icon_sun_cloud_n.svg';
      }
      case '03n': {
        return 'assets/icons/icon_cloud.svg';
      }
      case '04n': {
        return 'assets/icons/icon_2_clouds.svg';
      }
      case '09n': {
        return 'assets/icons/icon_rain.svg';
      }
      case '10n': {
        return 'assets/icons/icon_rain_n.svg';
      }
      case '11n': {
        return 'assets/icons/icon_storm.svg';
      }
      case '13n': {
        return 'assets/icons/icon_snow.svg';
      }
      case '50n': {
        return 'assets/icons/icon_mist.svg';
      }
      default: {
        return 'assets/icons/icons_sun.svg';
      }
    }
  }

  getWeather(city: string, code: string): any {
    this.weather = this.http.get(this.ROOT_URL + city + ',' + code + '&APPID=' + this.apiKey + '&units=metric').subscribe(data => {
        this.obje = data;
      }
    );
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
  weatherArray = [];
  weather: any;
  apiKey = '1aaa748e04abf09763b3fd31efcc9d11';
  // apiKey = '0dbfcc400a532cb8bb560009bdc4d663';
  readonly ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  obje: any = {};
  constructor(private http: HttpClient) {
  }

/*  getWeather(city: string, code: string): any {
    this.weather = this.http.get(this.ROOT_URL + city + ',' + code + '&APPID=' + this.apiKey + '&units=metric').subscribe(data => {
        this.obje = data;
     }
    );*/
  }




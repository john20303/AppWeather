import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = `http://api.openweathermap.org/data/2.5/weather?=metric&units&appid=`;
  apiKey = '227fb46263bd93d577b935626d870137&q=';

  constructor(private _http: HttpClient) { }

  getApi(city: string, code: string){
    return this._http.get(`${this.url}${this.apiKey}${city},${code}`);
  }
}

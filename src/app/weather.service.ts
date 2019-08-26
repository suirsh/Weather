import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { WEATHER } from './weather-data';



@Injectable()
export class WeatherService {
  private WeatherData : Weather[] = WEATHER;

 /* constructor(private http : HttpClient) { }

  getWeather(cityName : String) :Observable<Weather> {
   return this.http.get<Weather>('http://localhost:8080/weather/get?cityName='+cityName);
 
  }*/
  constructor(){}
  getWeather(cityName:string):Weather{
      for(var i=0;i<this.WeatherData.length;i++)
    {
      if(this.WeatherData[i].cityName == cityName)
      return this.WeatherData[i];
    
    }
  }
  

}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
private currentCityWeather : Weather;
private pastSearchValue : Weather[]= [];

constructor(private weatherservice : WeatherService ) { }
  ngOnInit() {
  }
getWeather(cityName : string ):void{

  
  this.currentCityWeather = this.weatherservice.getWeather(cityName);
  this.currentCityWeather.searchTime = (new Date()).toTimeString();
  this.pastSearchValue.push(this.currentCityWeather);
  
}
}
/*getWeather(cityName:string):void{
  this.weatherservice.getWeather(cityName).subscribe((k:Weather)=>
  {
    this.currentCityWeather=k;
  this.currentCityWeather.searchTime=(new Date()).toTimeString();
  this.pastSearchValue.push(this.currentCityWeather);
  })
  
}*/

 /*clear() :void{
  for(var i = 0 ; i < 100 ; i++)
  {
    this.pastSearchValue.pop();
  }
  //return this.pastSearchValue;

  }
*/



import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styles: [
  ]
})
export class OneComponent {

  weather:any;
  location: FormGroup;

  constructor(private _weather: WeatherService,
                       private fb: FormBuilder) {

    this.location = fb.group({
      city: ['',Validators.required],
      code: ['',Validators.required]
    })
    // this.dataWeather('Lima','PE');
  }

  dataWeather(city: string, code: string){
    return this._weather.getApi(city,code).subscribe(
      (res)=>{
        this.weather = res;
        console.log(this.weather)
      },(err)=>{
        console.log(err);
      }
    )
  }

  get city(){
    return this.location.get('city')?.invalid && this.location.get('city')?.touched;
  }
  get code(){
    return this.location.get('code')?.invalid && this.location.get('code')?.touched;
  }

  data() {
    this.dataWeather(this.location.value.city, this.location.value.code);
    // console.log(this.location.value.city, this.location.value.code)
    this.location.reset();
  }
}

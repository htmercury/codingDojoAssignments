import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather = null;
  constructor(private _httpService: HttpService) { }

  getWeather() {
    let tempObservable = this._httpService.getDallas();
    tempObservable.subscribe((res: any) => {
      console.log(res);
      this.weather = res;
    })
  }

  ngOnInit() {
    this.getWeather();
  }

}

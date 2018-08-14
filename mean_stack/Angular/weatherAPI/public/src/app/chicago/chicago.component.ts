import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather = null;
  constructor(private _httpService: HttpService) { }

  getWeather() {
    let tempObservable = this._httpService.getChicago();
    tempObservable.subscribe((res: any) => {
      console.log(res);
      this.weather = res;
    })
  }

  ngOnInit() {
    this.getWeather();
  }

}

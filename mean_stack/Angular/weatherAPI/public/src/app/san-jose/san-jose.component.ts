import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  weather = null;
  constructor(private _httpService: HttpService) { }

  getWeather() {
    let tempObservable = this._httpService.getSanJose();
    tempObservable.subscribe((res: any) => {
      console.log(res);
      this.weather = res;
    })
  }

  ngOnInit() {
    this.getWeather();
  }

}

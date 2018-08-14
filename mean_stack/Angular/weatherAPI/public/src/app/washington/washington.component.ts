import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  weather = null;
  constructor(private _httpService: HttpService) { }

  getWeather() {
    let tempObservable = this._httpService.getDC();
    tempObservable.subscribe((res: any) => {
      console.log(res);
      this.weather = res;
    })
  }

  ngOnInit() {
    this.getWeather();
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather = null;
  constructor(private _httpService: HttpService) { }

  getWeather() {
    let tempObservable = this._httpService.getBurbank();
    tempObservable.subscribe((res: any) => {
      console.log(res);
      this.weather = res;
    })
  }

  ngOnInit() {
    this.getWeather();
  }

}

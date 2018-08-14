import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  id: string;
  gold: number;
  logs: string[];

  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.startGameFromService();
  }

  startGameFromService() {
    let tempObservable = this._httpService.startGame();
    tempObservable.subscribe((res: any) => {
      this.id = res._id;
      this.gold = res.gold;
      this.logs = res.logs.reverse();
    })
  }

  processMoneyFromService(upper, lower, location) {
    let tempObservable = this._httpService.processMoney({upper: upper, lower: lower, location: location});
    tempObservable.subscribe((res:any) => {
      this.updateGameFromService(res);
    })
  }

  updateGameFromService(data) {
    data.id = this.id;
    let tempObservable = this._httpService.updateGame(data);
    tempObservable.subscribe((res:any) => {
      console.log(res);
      this.getGameFromService(this.id);
    })
  }

  getGameFromService(id) {
    let tempObservable = this._httpService.getGame(id);
    tempObservable.subscribe((res:any) => {
      console.log('game',res);
      this.gold = res.gold;
      this.logs = res.logs.reverse();
      console.log(this.gold, this.logs);
    })
  }

}

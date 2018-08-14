import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  startGame() {
    return this._http.get('/api/start_game');
  }

  processMoney(data) {
    return this._http.post('/api/process_money', data);
  }

  updateGame(data) {
    return this._http.post(`/api/game/${data.id}`, data);
  }

  getGame(id) {
    return this._http.get(`/api/game/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getSeattle() {
    return this._http.get('/api/seattle');
  }

  getSanJose() {
    return this._http.get('/api/sanjose');
  }

  getBurbank() {
    return this._http.get('/api/burbank');
  }

  getDallas() {
    return this._http.get('/api/dallas');
  }

  getDC() {
    return this._http.get('/api/dc');
  }

  getChicago() {
    return this._http.get('/api/chicago');
  }
}

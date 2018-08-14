import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getCakes() {
    return this._http.get('/cakes');
  }

  getCake(id) {
    return this._http.get(`/cakes/${id}`);
  }

  createCake(data) {
    return this._http.post('/cakes', data);
  }

  createRating(data, id) {
    return this._http.post(`cakes/${id}/ratings`, data);
  }
}

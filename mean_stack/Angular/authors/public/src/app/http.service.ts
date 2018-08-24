import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors() {
    return this._http.get('/api/authors');
  }

  createAuthor(data) {
    return this._http.post('/api/authors', data);
  }

  getAuthor(id) {
    return this._http.get(`/api/authors/${id}`);
  }

  editAuthor(id, data) {
    return this._http.put(`/api/authors/${id}`, data);
  }

  deleteAuthor(id) {
    return this._http.delete(`/api/authors/${id}`);
  }
  
}

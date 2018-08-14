import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
  }

  getTasks() {
    return this._http.get('/tasks');
  }

  getTask(id) {
    return this._http.get(`/tasks/${id}`);
  }

  createTask(data) {
    return this._http.post('/tasks', data);
  }

  deleteTask(id) {
    return this._http.delete(`/tasks/${id}`);
  }

  changeTask(data) {
    return this._http.put(`/tasks/${data._id}`, data);
  }
}

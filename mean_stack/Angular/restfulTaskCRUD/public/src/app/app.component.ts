import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

interface Response {
  message: string,
  data: Array<Task>
}

interface Task {
  _id: string,
  title: string,
  description: string,
  completed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks = [];
  newTask = {title: '', description: ''};
  task = {title: '', description: ''};
  edit = false;

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    this.getTasksFromService();
  }

  
  editTask(id) {
    this.getTaskFromService(id);
    this.edit = true;
  }

  createTask(data) {
    let tempObservable = this._httpService.createTask(this.newTask);
    tempObservable.subscribe((res: Response) => {
      this.getTasksFromService();
      this.newTask = {title: '', description: ''};
    });
  }

  deleteTask(id) {
    let tempObservable = this._httpService.deleteTask(id);
    tempObservable.subscribe((res: Response) => {
      this.getTasksFromService();
    });
  }

  changeTask() {
    let tempObservable = this._httpService.changeTask(this.task);
    tempObservable.subscribe((res: Response) => {
      this.getTasksFromService();
    });
  }

  getTasksFromService() {
    let tempObservable = this._httpService.getTasks();
    tempObservable.subscribe((res: Response) => {
      console.log('Got our tasks!', res);
      this.tasks = res.data;
    });
  }

  getTaskFromService(id) {
    let observable = this._httpService.getTask(id);
    observable.subscribe((res : any) => {
      console.log('Got a task!', res);
      this.task = res.data;
    })
  }
}

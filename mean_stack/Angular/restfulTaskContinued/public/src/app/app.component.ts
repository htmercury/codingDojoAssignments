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

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    this.getTasksFromService();
    console.log('second');
  }

  getTasksFromService() {
    let tempObservable = this._httpService.getTasks();
    tempObservable.subscribe((res: Response) => {
      console.log('Got our tasks!', res);
      this.tasks = res.data;
      for (let task of res.data) {
        this.getTaskFromService(task._id);
      }
    });
  }

  getTaskFromService(url) {
    let observable = this._httpService.getTask(url);
    observable.subscribe(data => {
      console.log(data);
    })
  }
}

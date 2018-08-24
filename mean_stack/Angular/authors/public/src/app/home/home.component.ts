import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }

  deleteAuthorFromService(id) {
    let tempObservable = this._httpService.deleteAuthor(id);
    tempObservable.subscribe((res: any) => {
      console.log(res);
      this.getAuthorsFromService();
    })
  }

  getAuthorsFromService() {
    let tempObservable = this._httpService.getAuthors();
    tempObservable.subscribe((res: any) => {
      this.authors = res;
      console.log(res);
    })
  }

}

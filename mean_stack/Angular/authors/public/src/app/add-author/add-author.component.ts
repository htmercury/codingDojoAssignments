import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  name = '';
  error = '';

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  createAuthorFromService() {
    console.log(this.name);
    let tempObservable = this._httpService.createAuthor({name: this.name});
    tempObservable.subscribe((res: any) => {
      if (res.name == 'ValidationError') {
        this.error = 'Name must be at least 3 characters!';
      }
      else {
        this._router.navigate(['/']);
      }
    })
  }

}

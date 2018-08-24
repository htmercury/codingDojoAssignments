import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  error = '';
  name = '';
  originalName = '';
  id = null;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getAuthorFromService();
    });
  }

  getAuthorFromService() {
    let tempObservable = this._httpService.getAuthor(this.id);
    tempObservable.subscribe((res: any) => {
      this.name = res.name;
      this.originalName = res.name;
    })
  }

  editAuthorFromService() {
    if (this.name == this.originalName) {
      this.error = 'Name must be new!'
      return;
    }
    console.log(this.id, this.name)
    let tempObservable = this._httpService.editAuthor(this.id, {name: this.name});
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

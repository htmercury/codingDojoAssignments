import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  cakes = [];
  newCake = {baker_name: '', image_url: ''};
  selectedCake = null;
  newRatings = {};


  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getCakesFromService(this.initializeNewRatings, null);
  }

  createCakeFromService() {
    console.log(this.newCake);
    let tempObservable = this._httpService.createCake(this.newCake);
    tempObservable.subscribe((res: any) => {
      console.log(res);
      this.newCake = {baker_name: '', image_url: ''};
      this.newRatings[res.data._id] = {rating: "5", comment: ""};
      this.getCakesFromService(this.initializeNewRating, res._id);
    })
  }

  getCakesFromService(update, arg) {
    let tempObservable = this._httpService.getCakes();
    tempObservable.subscribe((res: any) => {
      console.log(res);
      this.cakes = res.data.reverse();
      update(arg);
      if (this.selectedCake) {
        this.getCakeFromService(this.selectedCake._id);
      }
    })
  }

  initializeNewRatings = () => {
    for (let cake of this.cakes) {
      this.newRatings[cake._id] = {rating: "5", comment: ""};
    }
  }

  initializeNewRating = (id) => {
    this.newRatings[id] = {rating: "5", comment: ""};
  }

  getCakeFromService(id) {
    let tempObservable = this._httpService.getCake(id);
    tempObservable.subscribe((res: any) => {
      console.log(res);
      res.data.averageRating = 0;
      for (let entry of res.data.ratings) {
        res.data.averageRating += entry.rating;
      }
      res.data.averageRating = (res.data.averageRating / res.data.ratings.length).toFixed(1);
      if (res.data.averageRating != NaN) {
        res.data.averageRating = 'N/A';
      }
      this.selectedCake = res.data;
    })
  }

  createRatingFromService(id) {
    console.log(id);
    console.log(this.newRatings[id]);
    let tempObservable = this._httpService.createRating(this.newRatings[id], id);
    tempObservable.subscribe((res: any) => {
      console.log(res);
      this.getCakesFromService(this.initializeNewRating, id);
    })
  }
}

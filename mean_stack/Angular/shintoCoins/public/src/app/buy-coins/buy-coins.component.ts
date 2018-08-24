import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy-coins',
  templateUrl: './buy-coins.component.html',
  styleUrls: ['./buy-coins.component.css']
})
export class BuyCoinsComponent implements OnInit {
  value = null;
  owned = null;
  num = '';

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.value = this._shintoService.getValue();
    this.owned = this._shintoService.getOwned();
  }

  purchase() {
    let num = parseInt(this.num,10);
    if (isNaN(num)) {
      console.log(num);
    }
    else {
      this._shintoService.buy(num);
      this.owned = this._shintoService.getOwned();
      this.num = '';
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sell-coins',
  templateUrl: './sell-coins.component.html',
  styleUrls: ['./sell-coins.component.css']
})
export class SellCoinsComponent implements OnInit {
  value = null;
  owned = null;
  num = '';

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.value = this._shintoService.getValue();
    this.owned = this._shintoService.getOwned();
  }

  exchange() {
    let num = parseInt(this.num,10);
    if (isNaN(num)) {
      console.log(num);
    }
    else {
      this._shintoService.sell(num);
      this.owned = this._shintoService.getOwned();
      this.num = '';
    }
  }

}

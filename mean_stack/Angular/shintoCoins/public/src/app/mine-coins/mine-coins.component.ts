import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine-coins',
  templateUrl: './mine-coins.component.html',
  styleUrls: ['./mine-coins.component.css']
})
export class MineCoinsComponent implements OnInit {
  num = '';

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
  }

  checkAns() {
    let num = parseInt(this.num,10);
    if (isNaN(num)) {
      console.log(num);
    }
    else {
      this._shintoService.solve(num);
      this.num = '';
    }
  }

}

import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-browse-ledger',
  templateUrl: './browse-ledger.component.html',
  styleUrls: ['./browse-ledger.component.css']
})

export class BrowseLedgerComponent implements OnInit {
  transactions = {};
  Object = Object;

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.transactions = this._shintoService.getTransactions();
    console.log(this.transactions);

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction = null;
  id = null;

  constructor(
    private _shintoService: ShintoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      let transactions = this._shintoService.getTransactions();
      this.id = params['id'];
      this.transaction = transactions[this.id];
      if (!this.transaction) {
        this._router.navigate(['/home']);
      }
    })
  }

}

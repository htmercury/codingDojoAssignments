import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  ans = 13;
  owned = 0;
  value = 1;
  id = 1;
  transaction = {};

  constructor() { }

  getAns() {
    return this.ans;
  }

  getOwned() {
    return this.owned;
  }

  getValue() {
    return this.value;
  }

  getTransactions() {
    return this.transaction;
  }

  solve(num) {
    if (num == this.ans) {
      console.log('Correct!');
      this.owned++;
      this.transaction[this.id] = { action: 'Mined', amount: 1, value: this.value}
      this.id++;
    }
    else {
      console.log('Wrong!');
    }
  }

  buy(num) {
    console.log('Bought!');
    this.owned += num;
    this.transaction[this.id] = { action: 'Bought', amount: num, value: this.value * num}
    this.id++;
  }

  sell(num) {
    if (this.owned >= num) {
      console.log('Sold!');
      this.owned -= num;
      this.transaction[this.id] = {action: 'Sold', amount: num, value: this.value * num}
      this.id++;
    }
    else {
      console.log('Not enough coins!');
    }
  }
}

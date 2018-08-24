import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseLedgerComponent } from './browse-ledger/browse-ledger.component';
import { BuyCoinsComponent } from './buy-coins/buy-coins.component';
import { HomeComponent } from './home/home.component';
import { MineCoinsComponent } from './mine-coins/mine-coins.component';
import { SellCoinsComponent } from './sell-coins/sell-coins.component';
import { TransactionComponent } from './transaction/transaction.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'mine', component: MineCoinsComponent},
  {path: 'buy', component: BuyCoinsComponent},
  {path: 'sell', component: SellCoinsComponent},
  {path: 'ledger', component: BrowseLedgerComponent},
  {path: 'transaction/:id', component: TransactionComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

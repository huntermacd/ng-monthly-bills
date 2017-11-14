import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../app.reducer';
import { Bill } from '../bill.model';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.css']
})
export class BillsListComponent implements OnInit {
  bills = [];

  private subscription: Subscription;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.subscription =
      this.store.select(state => state.appState.bills)
        .subscribe((bills) => {
          this.bills = bills;
        });
  }

  // togglePaid(bill: Bill): void {
  //   const toggledBill = Object.assign({}, bill, {paid: !bill.paid});
  //   this.billsService.togglePaid(toggledBill)
  //     .subscribe();
  // }

  // delete(bill: Bill): void {
  //   this.billsService.delete(bill)
  //     .subscribe(() => {
  //       this.bills = this.bills.filter(b => b !== bill);
  //     });
  // }
}

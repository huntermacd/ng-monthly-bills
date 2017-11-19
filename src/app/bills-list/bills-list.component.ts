import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Bill } from '../shared/models/Bill';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.css']
})
export class BillsListComponent {
  bills$: Observable<Bill[]>;

  constructor(private store: Store<any>) {
    this.bills$ = store.select(state => state.appState.bills);
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

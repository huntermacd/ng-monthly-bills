import { Component, OnInit } from '@angular/core';
import { BillsService } from '../bills.service';
import { Bill } from '../bill.model';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.css']
})
export class BillsListComponent implements OnInit {
  bills: Bill[];

  constructor(private billsService: BillsService) { }

  ngOnInit() {
    this.billsService.getBills()
      .subscribe(bills => this.bills = bills);
  }

  togglePaid(bill: Bill): void {
    const toggledBill = Object.assign({}, bill, {paid: !bill.paid});
    this.billsService.togglePaid(toggledBill)
      .subscribe();
  }

  delete(bill: Bill): void {
    this.billsService.delete(bill)
      .subscribe(() => {
        this.bills = this.bills.filter(b => b !== bill);
      });
  }
}

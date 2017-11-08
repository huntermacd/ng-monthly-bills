import { Component, Input } from '@angular/core';
import { Bill } from '../bill.model';
import { BillsService } from '../bills.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent {
  @Input() bills: Bill[];
  bill: Bill = {
    id: null,
    dueDate: 1,
    description: '',
    payee: '',
    amountDue: null,
    paid: false
  };
  dates: Array<number> = Array(31).fill(0).map((x, i) => i + 1);

  constructor(private billsService: BillsService) { }

  add(): void {
    const newBill = Object.assign({}, this.bill, {id: new Date().getTime()});
    this.billsService.add(newBill)
      .subscribe(bill => {
        this.bills.push(bill);
        this.bill = {
          id: null,
          dueDate: 1,
          description: '',
          payee: '',
          amountDue: null,
          paid: false
        };
      });
  }
}

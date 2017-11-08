import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Bill } from './bill.model';

@Injectable()
export class BillsService {
  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});

  getBills() {
    return this.http.get('http://localhost:3000/bills')
      .map(res => res.json() as Bill[]);
  }

  add(bill: Bill) {
    return this.http.post('http://localhost:3000/bills', JSON.stringify(bill), {headers: this.headers})
      .map(res => res.json() as Bill);
  }

  togglePaid(bill: Bill) {
    return this.http.put(`http://localhost:3000/bills/${bill.id}`, JSON.stringify(bill), {headers: this.headers})
      .map(() => null);
  }

  delete(bill: Bill) {
    return this.http.delete(`http://localhost:3000/bills/${bill.id}`)
      .map(() => null);
  }
}

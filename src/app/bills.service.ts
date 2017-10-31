import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Bill } from './bill.model';

@Injectable()
export class BillsService {
  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});

  getBills(): Promise<Bill[]> {
    return this.http.get('http://localhost:3000/bills')
      .toPromise()
      .then(res => res.json() as Bill[])
      .catch(this.handleError);
  }

  togglePaid(bill: Bill): Promise<Bill> {
    return this.http.put(`http://localhost:3000/bills/${bill.id}`, JSON.stringify(bill), {headers: this.headers})
      .toPromise()
      .then(() => bill)
      .catch(this.handleError);
  }

  handleError(err: any): Promise<any> {
    return Promise.reject(err.message || err);
  }
}

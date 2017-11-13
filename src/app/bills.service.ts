import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bill } from './bill.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BillsService {
  constructor(private http: HttpClient) { }

  billsUrl = 'http://localhost:3000/bills';

  getBills() {
    return this.http.get<Bill[]>(this.billsUrl);
  }

  add(bill: Bill) {
    return this.http.post<Bill>(this.billsUrl, bill, httpOptions);
  }

  togglePaid(bill: Bill) {
    return this.http.put(`${this.billsUrl}/${bill.id}`, bill, httpOptions);
  }

  delete(bill: Bill) {
    return this.http.delete<Bill>(`${this.billsUrl}/${bill.id}`, httpOptions);
  }
}

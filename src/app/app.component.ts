import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LoadBills } from './app.actions';
import { Bill } from './shared/models/Bill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new LoadBills());
  }
}

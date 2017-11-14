import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { BillsService } from './bills.service';
import { Bill } from './bill.model';
import {
  AppActionTypes,
  LoadBills,
  LoadBillsSuccess
} from './app.actions';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

@Injectable()
export class BillsEffects {
  constructor(
    private actions$: Actions,
    private billsService: BillsService
  ) { }

  @Effect() loadBills$: Observable<Action> = this.actions$
    .ofType(AppActionTypes.LOAD_BILLS)
    .pipe(switchMap(() => this.billsService.getBills()),
      map((res: Bill[]) => new LoadBillsSuccess(res)));
}

import { Action } from '@ngrx/store';
import { Bill } from './bill.model';

export const enum AppActionTypes {
  LOAD_BILLS = '[Bills] Load Bills',
  LOAD_BILLS_SUCCESS = '[Bills] Load Bills Success'
}

export class LoadBills implements Action {
  readonly type = AppActionTypes.LOAD_BILLS;
}

export class LoadBillsSuccess implements Action {
  readonly type = AppActionTypes.LOAD_BILLS_SUCCESS;
  constructor(public payload: Bill[]) { }
}

export type AppActions =
  LoadBills |
  LoadBillsSuccess;

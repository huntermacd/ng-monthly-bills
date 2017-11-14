import { AppActions, AppActionTypes } from './app.actions';
import { Bill } from './bill.model';

export interface AppState {
  bills: Bill[];
}

const initialState: AppState = {
  bills: []
};

export function billsReducer(state: AppState = initialState, action: AppActions) {
  switch (action.type) {
    case AppActionTypes.LOAD_BILLS_SUCCESS:
      return {
        ...state,
        bills: [...action.payload]
      };
    default:
      return state;
  }
}

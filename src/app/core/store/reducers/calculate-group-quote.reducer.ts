import { createReducer, on } from '@ngrx/store';
import { ICalculateGroupQuoteState } from '../state-interfaces/calculate-group-quote.state';
import * as CalculateGroupQuoteActions from '../actions/calculate-group-quote.actions';
import { ICalculateGroupQuoteResponse } from '../../models/api/response/calculate-quote/calculate-group-quote-response.model';

export const initialState: ICalculateGroupQuoteState = {
  quoteResult: {
    groups: [],
    totalBasePrice: 0,
    totalDiscount: 0,
    totalFinalPrice: 0,
    totalIncrease: 0,
  },
  customerRegisterDate: null,
  loading: false,
  error: '',
};

export const calculateGroupQuoteReducer = createReducer(
  initialState,
  on(
    CalculateGroupQuoteActions.calculateGroupQuoteResult,
    calculateGroupQuoteResult
  ),
  on(
    CalculateGroupQuoteActions.calculateGroupQuoteResultSuccess,
    calculateGroupQuoteResultSuccess
  ),
  on(
    CalculateGroupQuoteActions.changeCustomerRegisterDate,
    changeCustomerRegisterDate
  )
);

function calculateGroupQuoteResult(state: ICalculateGroupQuoteState) {
  return { ...state, loading: true };
}

function calculateGroupQuoteResultSuccess(
  state: ICalculateGroupQuoteState,
  action: ICalculateGroupQuoteResponse
) {
  return { ...state, quoteResult: action, loading: false };
}

function calculateGroupQuoteResultFailure(
  state: ICalculateGroupQuoteState,
  action: string
) {
  return { ...state, error: action, loading: false };
}

function changeCustomerRegisterDate(
  state: ICalculateGroupQuoteState,
  action: { customerRegisterDate: Date }
) {
  return { ...state, customerRegisterDate: action.customerRegisterDate };
}

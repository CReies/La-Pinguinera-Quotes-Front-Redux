import { createAction, props } from '@ngrx/store';
import { ICalculateGroupQuoteResponse } from '../../models/api/response/calculate-quote/calculate-group-quote-response.model';

export const calculateGroupQuoteResult = createAction(
  '[CalculateGroupQuote] Calculate Group Quote Result'
);

export const calculateGroupQuoteResultSuccess = createAction(
  '[CalculateGroupQuote] Calculate Group Quote Result Success',
  props<ICalculateGroupQuoteResponse>()
);

export const calculateGroupQuoteResultFailure = createAction(
  '[CalculateGroupQuote] Calculate Group Quote Result',
  props<{ error: string }>()
);

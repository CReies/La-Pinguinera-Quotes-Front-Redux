import { createAction, props } from '@ngrx/store';
import { ICalculateGroupQuoteResponse } from '../../models/api/response/calculate-quote/calculate-group-quote-response.model';
import { ICalculateGroupQuoteRequest } from '../../models/api/request/calculate-quote/calculate-group-quote-request.model';

export const calculateGroupQuoteResult = createAction(
  '[CalculateGroupQuote] Calculate Group Quote Result',
  props<ICalculateGroupQuoteRequest>()
);

export const calculateGroupQuoteResultSuccess = createAction(
  '[CalculateGroupQuote] Calculate Group Quote Result',
  props<ICalculateGroupQuoteResponse>()
);
export const calculateGroupQuoteResultFailure = createAction(
  '[CalculateGroupQuote] Calculate Group Quote Result',
  props<{ error: string }>()
);

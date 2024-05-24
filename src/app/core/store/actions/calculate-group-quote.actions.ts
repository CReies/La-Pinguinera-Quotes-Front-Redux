import { createAction, props } from '@ngrx/store';
import { ICalculateGroupQuoteResponse } from '../../models/api/response/calculate-quote/calculate-group-quote-response.model';
import { ICart } from '../state-interfaces/group-cart.state';

export const calculateGroupQuoteResult = createAction(
  '[CalculateGroupQuote] Calculate Group Quote Result',
  props<{
    aggregateId: string;
    cartGroups: ICart[];
    customerRegisterDate: Date;
  }>()
);

export const calculateGroupQuoteResultSuccess = createAction(
  '[CalculateGroupQuote] Calculate Group Quote Result',
  props<ICalculateGroupQuoteResponse>()
);

export const calculateGroupQuoteResultFailure = createAction(
  '[CalculateGroupQuote] Calculate Group Quote Result',
  props<{ error: string }>()
);

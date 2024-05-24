import { createSelector } from '@ngrx/store';
import { AppState } from '../store';
import { ICalculateGroupQuoteState } from '../state-interfaces/calculate-group-quote.state';

export const selectCalculateGroupQuoteState = (state: AppState) =>
  state.calculateGroupQuote;

export const selectQuoteResult = createSelector(
  selectCalculateGroupQuoteState,
  (state: ICalculateGroupQuoteState) => state.quoteResult
);

export const selectIsLoading = createSelector(
  selectCalculateGroupQuoteState,
  (state: ICalculateGroupQuoteState) => state.loading
);

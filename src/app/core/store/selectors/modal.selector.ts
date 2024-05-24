import { createSelector } from '@ngrx/store';
import { AppState } from '../store';
import { IModalState } from '../state-interfaces/modal.state';

export const selectModalState = (state: AppState) => state.modal;

export const selectGroupQuote = createSelector(
  selectModalState,
  (state: IModalState) => state.groupQuoteModal
);

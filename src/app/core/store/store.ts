import { Action, ActionReducer } from '@ngrx/store';
import { booksReducer } from './reducers/books.reducer';
import { BooksEffects } from './effects/books.effects';
import { IBooksState } from './state-interfaces/books.state';
import { IGroupCartState } from './state-interfaces/group-cart.state';
import { groupCartReducer } from './reducers/group-cart.reducer';
import { CalculateQuoteEffects } from './effects/calculate-quote.effects';
import { ICalculateGroupQuoteState } from './state-interfaces/calculate-group-quote.state';
import { calculateGroupQuoteReducer } from './reducers/calculate-group-quote.reducer';
import { IModalState } from './state-interfaces/modal.state';
import { modalReducer } from './reducers/modal.reducer';

export interface AppState {
  books: IBooksState;
  groupCart: IGroupCartState;
  calculateGroupQuote: ICalculateGroupQuoteState;
  modal: IModalState;
}

export interface AppStore {
  books: ActionReducer<IBooksState, Action>;
  groupCart: ActionReducer<IGroupCartState, Action>;
  calculateGroupQuote: ActionReducer<ICalculateGroupQuoteState, Action>;
  modal: ActionReducer<IModalState, Action>;
}

export const appStore: AppStore = {
  books: booksReducer,
  groupCart: groupCartReducer,
  calculateGroupQuote: calculateGroupQuoteReducer,
  modal: modalReducer,
};

export const appEffects = [BooksEffects, CalculateQuoteEffects];

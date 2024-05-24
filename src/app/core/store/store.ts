import { Action, ActionReducer } from '@ngrx/store';
import { booksReducer } from './reducers/books.reducer';
import { BooksEffects } from './effects/books.effects';
import { IBooksState } from './state-interfaces/books.state';
import { IGroupCartState } from './state-interfaces/group-cart.state';
import { groupCartReducer } from './reducers/group-cart.reducer';
import { CalculateQuoteEffects } from './effects/calculate-quote.effects';
import { ICalculateGroupQuoteState } from './state-interfaces/calculate-group-quote.state';
import { calculateGroupQuoteReducer } from './reducers/calculate-group-quote.reducer';

export interface AppState {
  books: IBooksState;
  groupCart: IGroupCartState;
  calculateGroupQuote: ICalculateGroupQuoteState;
}

export interface AppStore {
  books: ActionReducer<IBooksState, Action>;
  groupCart: ActionReducer<IGroupCartState, Action>;
  calculateGroupQuote: ActionReducer<ICalculateGroupQuoteState, Action>;
}

export const appStore: AppStore = {
  books: booksReducer,
  groupCart: groupCartReducer,
  calculateGroupQuote: calculateGroupQuoteReducer,
};

export const appEffects = [BooksEffects, CalculateQuoteEffects];

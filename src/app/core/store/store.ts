import { Action, ActionReducer } from '@ngrx/store';
import { booksReducer } from './reducers/books.reducer';
import { BooksEffects } from './effects/books.effects';
import { IBooksState } from './state-interfaces/books.state';
import { IGroupCartState } from './state-interfaces/group-cart.state';
import { groupCartReducer } from './reducers/group-cart.reducer';

export interface AppState {
  books: IBooksState;
  groupCart: IGroupCartState;
}

export interface AppStore {
  books: ActionReducer<IBooksState, Action>;
  groupCart: ActionReducer<IGroupCartState, Action>;
}

export const appStore: AppStore = {
  books: booksReducer,
  groupCart: groupCartReducer,
};

export const appEffects = [BooksEffects];

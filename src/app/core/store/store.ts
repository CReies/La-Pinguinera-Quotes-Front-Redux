import { Action, ActionReducer } from '@ngrx/store';
import { BooksState, booksReducer } from './reducers/books.reducer';
import { BooksEffects } from './effects/books.effects';

export interface AppState {
  books: BooksState;
}

export interface AppStore {
  books: ActionReducer<BooksState, Action>;
}

export const appStore: AppStore = {
  books: booksReducer,
};

export const appEffects = [BooksEffects];

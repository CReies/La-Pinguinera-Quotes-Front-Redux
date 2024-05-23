import { Action, ActionReducer } from '@ngrx/store';
import { IBooksState, booksReducer } from './reducers/books.reducer';
import { BooksEffects } from './effects/books.effects';

export interface AppState {
  books: IBooksState;
}

export interface AppStore {
  books: ActionReducer<IBooksState, Action>;
}

export const appStore: AppStore = {
  books: booksReducer,
};

export const appEffects = [BooksEffects];

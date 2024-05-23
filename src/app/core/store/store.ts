import { Action, ActionReducer } from '@ngrx/store';
import {  booksReducer } from './reducers/books.reducer';
import { BooksEffects } from './effects/books.effects';
import { IBooksState } from './state-interfaces/IBooks.state';

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

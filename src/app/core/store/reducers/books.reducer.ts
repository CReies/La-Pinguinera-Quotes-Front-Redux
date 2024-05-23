import { createReducer, on } from '@ngrx/store';
import * as BooksActions from '../actions/books.actions';
import { IBooksState } from '../state-interfaces/IBooks.state';

export const initialState: IBooksState = {
  bookList: [],
  loading: false,
  error: '',
};

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.loadBooks, (state) => ({ ...state, loading: true })),
  on(BooksActions.loadBooksSuccess, (state, action) => ({
    ...state,
    bookList: action.bookList,
  }))
);

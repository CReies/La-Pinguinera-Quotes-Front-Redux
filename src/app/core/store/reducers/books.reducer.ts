import { createReducer, on } from '@ngrx/store';
import { IBook } from '../../models/shared/book.model';
import * as BooksActions from '../actions/books.actions';

export interface BooksState {
  bookList: IBook[];
  loading: boolean;
  error: string;
}

export const initialState: BooksState = {
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

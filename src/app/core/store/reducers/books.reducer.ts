import { createReducer, on } from '@ngrx/store';
import * as BooksActions from '../actions/books.actions';
import { IBooksState } from '../state-interfaces/books.state';
import { IBook } from '../../models/shared/book.model';

export const initialState: IBooksState = {
  bookList: [],
  loading: false,
  error: '',
};

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.loadBooks, loadBooks),
  on(BooksActions.loadBooksSuccess, loadBooksSuccess)
);

function loadBooks(state: IBooksState) {
  return { ...state, loading: true };
}

function loadBooksSuccess(state: IBooksState, action: { bookList: IBook[] }) {
  return { ...state, bookList: action.bookList };
}

import { createSelector } from '@ngrx/store';
import { AppState } from '../store';
import { BooksState } from '../reducers/books.reducer';

export const selectBooksState = (state: AppState) => state.books;

export const selectBooks = createSelector(
  selectBooksState,
  (state: BooksState) => state.bookList
);

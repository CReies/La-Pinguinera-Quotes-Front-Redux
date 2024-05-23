import { createSelector } from '@ngrx/store';
import { AppState } from '../store';
import { IBooksState } from '../state-interfaces/IBooks.state';

export const selectBooksState = (state: AppState) => state.books;

export const selectBookList = createSelector(
  selectBooksState,
  (state: IBooksState) => state.bookList
);

export const selectIsLoading = createSelector(
  selectBooksState,
  (state: IBooksState) => state.loading
);

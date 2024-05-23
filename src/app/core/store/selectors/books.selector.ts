import { createSelector } from '@ngrx/store';
import { AppState } from '../store';
import { IBooksState } from '../reducers/books.reducer';

export const selectIBooksState = (state: AppState) => state.books;

export const selectBookList = createSelector(
  selectIBooksState,
  (state: IBooksState) => state.bookList
);

export const selectIsLoading = createSelector(
  selectIBooksState,
  (state: IBooksState) => state.loading
);

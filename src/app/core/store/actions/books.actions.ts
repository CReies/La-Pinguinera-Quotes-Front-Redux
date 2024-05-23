import { createAction, props } from '@ngrx/store';
import { IBook } from '../../models/shared/book.model';

export const loadBooks = createAction(
  '[Books] Load Books',
  props<{ aggregateId: string }>
);
export const loadBooksSuccess = createAction(
  '[Books] Load Books Success',
  props<{ bookList: IBook[] }>()
);
export const loadBooksFailure = createAction(
  '[Books] Load Books Failure',
  props<{ error: string }>()
);

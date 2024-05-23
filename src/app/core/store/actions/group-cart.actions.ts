import { createAction, props } from '@ngrx/store';
import { IBook } from '../../models/shared/book.model';

export const addBook = createAction(
  '[GroupCart] Add Book',
  props<{ book: IBook }>()
);

export const removeBook = createAction(
  '[GroupCart] Remove Book',
  props<{ bookId: string }>()
);

export const addOneBook = createAction(
  '[GroupCart] Add One Book',
  props<{ bookId: string }>()
);

export const removeOneBook = createAction(
  '[GroupCart] Remove One Book',
  props<{ bookId: string }>()
);

export const changeActiveCart = createAction(
  '[GroupCart] Change Active Cart',
  props<{ cartIndex: number }>()
);

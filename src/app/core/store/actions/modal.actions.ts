import { createAction, props } from '@ngrx/store';

export const setGroupQuoteModalVisibility = createAction(
  '[Modal] Set Group Quote Modal Visibility',
  props<{ visible: boolean }>()
);

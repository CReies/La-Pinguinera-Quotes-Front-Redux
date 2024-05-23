import { createSelector } from '@ngrx/store';
import { AppState } from '../store';
import { IGroupCartState } from '../state-interfaces/IGroupCart.state';

export const selectGroupCartState = (state: AppState) => state.groupCart;

export const selectCarts = createSelector(
  selectGroupCartState,
  (state: IGroupCartState) => state.carts
);

export const selectActiveCart = createSelector(
  selectGroupCartState,
  (state: IGroupCartState) => state.carts.filter((c) => c.active)
);
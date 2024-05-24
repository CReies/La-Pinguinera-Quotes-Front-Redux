import { Injectable } from '@angular/core';
import { AppState } from '../../core/store/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICart } from '../../core/store/state-interfaces/IGroupCart.state';
import {
  selectActiveCart,
  selectCarts,
} from '../../core/store/selectors/group-cart.selector';
import * as GroupCartActions from '../../core/store/actions/group-cart.actions';
import { IBookForCart } from '../../core/models/shared/book-for-cart.model';

@Injectable({ providedIn: 'root' })
export class GroupCartContainerFacade {
  constructor(private readonly store: Store<AppState>) {}

  cartGroups$(): Observable<ICart[]> {
    return this.store.select(selectCarts);
  }

  activeCart$(): Observable<ICart> {
    return this.store.select(selectActiveCart);
  }

  changeActiveCart(cart: ICart): void {
    this.store.dispatch(GroupCartActions.changeActiveCart({ cartId: cart.id }));
  }

  addOneBook(book: IBookForCart): void {
    this.store.dispatch(GroupCartActions.addOneBook({ bookId: book.id }));
  }

  removeOneBook(book: IBookForCart): void {
    this.store.dispatch(GroupCartActions.removeOneBook({ bookId: book.id }));
  }

  addNewCart(): void {
    this.store.dispatch(GroupCartActions.addNewCart());
  }

  removeCart(cartId: number): void {
    this.store.dispatch(GroupCartActions.removeCart({ cartId }));
  }
}

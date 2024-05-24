import { Injectable } from '@angular/core';
import { AppState } from '../../core/store/store';
import { Store } from '@ngrx/store';
import { Observable, map, take, tap } from 'rxjs';
import { ICart } from '../../core/store/state-interfaces/group-cart.state';
import {
  selectActiveCart,
  selectCarts,
} from '../../core/store/selectors/group-cart.selector';
import * as GroupCartActions from '../../core/store/actions/group-cart.actions';
import * as CalculateGroupQuoteActions from '../../core/store/actions/calculate-group-quote.actions';
import { IBookForCart } from '../../core/models/shared/book-for-cart.model';
import { CalculateGroupQuoteService } from '../../core/services/api/calculate-quote/calculate-group-quote.service';

@Injectable({ providedIn: 'root' })
export class GroupCartContainerFacade {
  constructor(
    private readonly store: Store<AppState>,
    private readonly calculateGroupQuoteService: CalculateGroupQuoteService
  ) {}

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

  calculateQuote(): void {
    this.store
      .select(selectCarts)
      .subscribe((data) => {
        this.calculateGroupQuoteService.exec(data).subscribe((res) => {
          this.store.dispatch(
            CalculateGroupQuoteActions.calculateGroupQuoteResultSuccess(res)
          );
        });
      })
      .unsubscribe();
  }
}

import { Injectable } from '@angular/core';
import { AppState } from '../../core/store/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICart } from '../../core/store/state-interfaces/group-cart.state';
import {
  selectActiveCart,
  selectCarts,
} from '../../core/store/selectors/group-cart.selector';
import * as GroupCartActions from '../../core/store/actions/group-cart.actions';
import * as CalculateGroupQuoteActions from '../../core/store/actions/calculate-group-quote.actions';
import * as ModalActions from '../../core/store/actions/modal.actions';
import { IBookForCart } from '../../core/models/shared/book-for-cart.model';
import { CalculateGroupQuoteService } from '../../core/services/api/calculate-quote/calculate-group-quote.service';
import {
  selectCustomerRegisterDate,
  selectIsLoading,
} from '../../core/store/selectors/calculate-group-quote.selector';

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

  customerRegisterDate$(): Observable<Date> {
    return this.store.select(selectCustomerRegisterDate);
  }

  isLoading$(): Observable<boolean> {
    return this.store.select(selectIsLoading);
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
    this.store.dispatch(CalculateGroupQuoteActions.calculateGroupQuoteResult());
    this.store
      .select(selectCarts)
      .subscribe((data) => {
        this.calculateGroupQuoteService.exec(data).subscribe((res) => {
          this.store.dispatch(
            CalculateGroupQuoteActions.calculateGroupQuoteResultSuccess(res)
          );

          this.store.dispatch(
            ModalActions.setGroupQuoteModalVisibility({ visible: true })
          );
        });
      })
      .unsubscribe();
  }
}

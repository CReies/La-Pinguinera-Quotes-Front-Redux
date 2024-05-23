import { Injectable } from '@angular/core';
import { AppState } from '../../core/store/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICart } from '../../core/store/state-interfaces/IGroupCart.state';
import { selectCarts } from '../../core/store/selectors/group-cart.selector';
import * as GroupCartActions from '../../core/store/actions/group-cart.actions';

@Injectable({ providedIn: 'root' })
export class GroupCartContainerFacade {
  constructor(private readonly store: Store<AppState>) {}

  cartGroups$(): Observable<ICart[]> {
    return this.store.select(selectCarts);
  }

  changeActiveCart(cart: ICart): void {
    this.store.dispatch(GroupCartActions.changeActiveCart({ cartId: cart.id }));
  }
}

import { Component, OnInit } from '@angular/core';
import { GroupCartComponent } from '../../ui/blocks/group-cart/group-cart.component';
import { Observable } from 'rxjs';
import { ICart } from '../../core/store/state-interfaces/group-cart.state';
import { GroupCartContainerFacade } from './group-cart-container.facade';
import { AsyncPipe } from '@angular/common';
import { IBookForCart } from '../../core/models/shared/book-for-cart.model';

@Component({
  selector: 'app-group-cart-container',
  standalone: true,
  imports: [GroupCartComponent, AsyncPipe],
  templateUrl: './group-cart-container.component.html',
})
export class GroupCartContainerComponent implements OnInit {
  public cartGroups$: Observable<ICart[]>;
  public activeCart$: Observable<ICart>;

  constructor(private readonly facade: GroupCartContainerFacade) {}

  changeActiveCart(cart: ICart): void {
    this.facade.changeActiveCart(cart);
  }

  addOneBook(book: IBookForCart): void {
    this.facade.addOneBook(book);
  }

  removeOneBook(book: IBookForCart): void {
    this.facade.removeOneBook(book);
  }

  addNewCart(): void {
    this.facade.addNewCart();
  }

  removeCart(cartId: number): void {
    this.facade.removeCart(cartId);
  }

  ngOnInit(): void {
    this.initializeSubscriptions();
  }

  private initializeSubscriptions(): void {
    this.cartGroups$ = this.facade.cartGroups$();
    this.activeCart$ = this.facade.activeCart$();
  }
}

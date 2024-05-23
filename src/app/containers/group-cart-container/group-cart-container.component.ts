import { Component, OnInit } from '@angular/core';
import { GroupCartComponent } from '../../ui/blocks/group-cart/group-cart.component';
import { Observable } from 'rxjs';
import { ICart } from '../../core/store/state-interfaces/IGroupCart.state';
import { GroupCartContainerFacade } from './group-cart-container.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-group-cart-container',
  standalone: true,
  imports: [GroupCartComponent, AsyncPipe],
  templateUrl: './group-cart-container.component.html',
})
export class GroupCartContainerComponent implements OnInit {
  public cartGroups$: Observable<ICart[]>;

  constructor(private readonly facade: GroupCartContainerFacade) {}

  changeActiveCart(cart: ICart): void {
    this.facade.changeActiveCart(cart);
  }

  ngOnInit(): void {
    this.initializeSubscriptions();
  }

  private initializeSubscriptions(): void {
    this.cartGroups$ = this.facade.cartGroups$();
  }
}

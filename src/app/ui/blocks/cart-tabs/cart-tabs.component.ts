import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICart } from '../../../core/store/state-interfaces/IGroupCart.state';

@Component({
  selector: 'app-cart-tabs',
  standalone: true,
  imports: [],
  templateUrl: './cart-tabs.component.html',
  styleUrl: './cart-tabs.component.css',
})
export class CartTabsComponent {
  @Input() cartGroups: ICart[];
  @Output() onChangeActiveCart: EventEmitter<ICart> = new EventEmitter();

  changeActiveCart(cart: ICart) {
    this.onChangeActiveCart.emit(cart);
  }
}

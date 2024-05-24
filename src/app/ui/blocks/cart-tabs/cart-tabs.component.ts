import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICart } from '../../../core/store/state-interfaces/group-cart.state';
import { SvgComponent } from '../../elements/svg/svg.component';

@Component({
  selector: 'app-cart-tabs',
  standalone: true,
  imports: [SvgComponent],
  templateUrl: './cart-tabs.component.html',
  styleUrl: './cart-tabs.component.css',
})
export class CartTabsComponent {
  @Input() cartGroups: ICart[];
  @Input() activeCart: ICart;

  @Output() onChangeActiveCart: EventEmitter<ICart> = new EventEmitter();
  @Output() onAddNewCart: EventEmitter<void> = new EventEmitter();
  @Output() onRemoveCart: EventEmitter<number> = new EventEmitter();

  changeActiveCart(cart: ICart) {
    this.onChangeActiveCart.emit(cart);
  }

  addNewCart() {
    this.onAddNewCart.emit();
  }

  removeCart(cart: ICart) {
    this.onRemoveCart.emit(cart.id);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICart } from '../../../core/store/state-interfaces/IGroupCart.state';
import { IBook } from '../../../core/models/shared/book.model';
import { CartTabsComponent } from '../cart-tabs/cart-tabs.component';

@Component({
  selector: 'app-group-cart',
  standalone: true,
  imports: [CartTabsComponent],
  templateUrl: './group-cart.component.html',
  styleUrl: './group-cart.component.css',
})
export class GroupCartComponent {
  @Input() cartGroups: ICart[];
  @Output() onChangeActiveCart: EventEmitter<ICart> = new EventEmitter();
  @Output() onAddOneBook: EventEmitter<IBook> = new EventEmitter();
  @Output() onRemoveOneBook: EventEmitter<IBook> = new EventEmitter();

  changeActiveCart(cart: ICart) {
    this.onChangeActiveCart.emit(cart);
  }

  addOneBook(book: IBook) {
    this.onAddOneBook.emit(book);
  }

  removeOneBook(book: IBook) {
    this.onRemoveOneBook.emit(book);
  }
}

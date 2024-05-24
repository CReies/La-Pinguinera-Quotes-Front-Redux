import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IBookForCart } from '../../../core/models/shared/book-for-cart.model';

@Component({
  selector: 'app-cart-details-element',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-details-element.component.html',
  styleUrl: './cart-details-element.component.css',
})
export class CartDetailsElementComponent {
  @Input() book: IBookForCart;
  @Input() index: number;

  @Output() onAddOneBook: EventEmitter<IBookForCart> = new EventEmitter();
  @Output() onRemoveOneBook: EventEmitter<IBookForCart> = new EventEmitter();

  addOneBook(): void {
    this.onAddOneBook.emit(this.book);
  }

  removeOneBook(): void {
    this.onRemoveOneBook.emit(this.book);
  }
}

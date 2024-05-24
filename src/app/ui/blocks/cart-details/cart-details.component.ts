import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CartDetailsElementComponent } from '../cart-details-element/cart-details-element.component';
import { IBookForCart } from '../../../core/models/shared/book-for-cart.model';

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [CartDetailsElementComponent],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css',
})
export class CartDetailsComponent {
  @Input() books: IBookForCart[];

  @Output() onAddOneBook: EventEmitter<IBookForCart> = new EventEmitter();
  @Output() onRemoveOneBook: EventEmitter<IBookForCart> = new EventEmitter();

  addOneBook(book: IBookForCart) {
    this.onAddOneBook.emit(book);
  }

  removeOneBook(book: IBookForCart) {
    this.onRemoveOneBook.emit(book);
  }
}

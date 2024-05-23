import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../../../core/models/shared/book.model';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-book-cards',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './book-cards.component.html',
  styleUrl: './book-cards.component.css',
})
export class BookCardsComponent {
  @Input() bookList: IBook[];
  @Output() onAddToCart: EventEmitter<IBook> = new EventEmitter();
  @Output() onRemoveFromCart: EventEmitter<IBook> = new EventEmitter();

  addToCart(book: IBook): void {
    this.onAddToCart.emit(book);
  }

  removeFromCart(book: IBook): void {
    this.onRemoveFromCart.emit(book);
  }
}

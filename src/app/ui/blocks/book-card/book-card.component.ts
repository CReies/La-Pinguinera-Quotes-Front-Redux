import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../../../core/models/shared/book.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
})
export class BookCardComponent {
  addedToCart: boolean = false;

  @Input() book: IBook;
  @Output() onAddToCart: EventEmitter<IBook> = new EventEmitter();
  @Output() onRemoveFromCart: EventEmitter<IBook> = new EventEmitter();

  addToCart(): void {
    this.addedToCart = true;
    this.onAddToCart.emit();
  }

  removeFromCart(): void {
    this.addedToCart = false;
    this.onRemoveFromCart.emit(this.book);
  }
}

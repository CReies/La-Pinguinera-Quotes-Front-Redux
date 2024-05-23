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
  addedBook: boolean = false;

  @Input() book: IBook;
  @Output() onAddBook: EventEmitter<IBook> = new EventEmitter();
  @Output() onRemoveBook: EventEmitter<IBook> = new EventEmitter();

  addBook(): void {
    this.addedBook = true;
    this.onAddBook.emit(this.book);
  }

  removeBook(): void {
    this.addedBook = false;
    this.onRemoveBook.emit(this.book);
  }
}

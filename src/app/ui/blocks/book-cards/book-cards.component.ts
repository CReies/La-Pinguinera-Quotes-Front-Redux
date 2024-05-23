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
  @Output() onAddBook: EventEmitter<IBook> = new EventEmitter();
  @Output() onRemoveBook: EventEmitter<IBook> = new EventEmitter();

  addBook(book: IBook): void {
    this.onAddBook.emit(book);
  }

  removeBook(book: IBook): void {
    console.log('object');
    this.onRemoveBook.emit(book);
  }
}

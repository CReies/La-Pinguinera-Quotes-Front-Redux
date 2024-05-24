import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IBook } from '../../../core/models/shared/book.model';
import { CurrencyPipe } from '@angular/common';
import { IBookForCart } from '../../../core/models/shared/book-for-cart.model';
import { ICart } from '../../../core/store/state-interfaces/IGroupCart.state';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
})
export class BookCardComponent implements OnChanges {
  @Input() book: IBook;
  @Input() activeBooks: IBookForCart[];
  @Output() onAddBook: EventEmitter<IBook> = new EventEmitter();
  @Output() onRemoveBook: EventEmitter<IBook> = new EventEmitter();
  addedBook: boolean;

  addBook(): void {
    this.addedBook = true;
    this.onAddBook.emit(this.book);
  }

  removeBook(): void {
    this.addedBook = false;
    this.onRemoveBook.emit(this.book);
  }

  updateAddedBook(value: boolean): void {
    this.addedBook = value;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['activeBooks']) return;
    this.updateAddedBook(
      changes['activeBooks'].currentValue.some(
        (book: IBookForCart) => book.id === this.book.id
      )
    );
  }
}

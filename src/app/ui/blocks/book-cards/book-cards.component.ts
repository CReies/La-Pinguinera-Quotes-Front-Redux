import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IBook } from '../../../core/models/shared/book.model';
import { BookCardComponent } from '../book-card/book-card.component';
import { ICart } from '../../../core/store/state-interfaces/group-cart.state';
import { IBookForCart } from '../../../core/models/shared/book-for-cart.model';
import { LoadingComponent } from '../../elements/loading/loading.component';

@Component({
  selector: 'app-book-cards',
  standalone: true,
  imports: [BookCardComponent, LoadingComponent],
  templateUrl: './book-cards.component.html',
  styleUrl: './book-cards.component.css',
})
export class BookCardsComponent implements OnChanges {
  @Input() bookList: IBook[];
  @Input() activeCart: ICart;
  @Input() isLoading: boolean;

  @Output() onAddBook: EventEmitter<IBook> = new EventEmitter();
  @Output() onRemoveBook: EventEmitter<IBook> = new EventEmitter();

  activeBooks: IBookForCart[] = [];

  addBook(book: IBook): void {
    this.onAddBook.emit(book);
  }

  removeBook(book: IBook): void {
    this.onRemoveBook.emit(book);
  }

  updateActiveBooks(books: IBookForCart[]): void {
    this.activeBooks = books;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['activeCart']) return;
    this.updateActiveBooks(changes['activeCart'].currentValue.books);
  }
}

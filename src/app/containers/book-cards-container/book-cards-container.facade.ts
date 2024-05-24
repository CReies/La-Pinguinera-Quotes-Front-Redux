import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBook } from '../../core/models/shared/book.model';
import * as BooksActions from '../../core/store/actions/books.actions';
import * as GroupCartActions from '../../core/store/actions/group-cart.actions';
import {
  selectBookList,
  selectIsLoading,
} from '../../core/store/selectors/books.selector';
import { AppState } from '../../core/store/store';
import { selectActiveCart } from '../../core/store/selectors/group-cart.selector';
import { IBookForCart } from '../../core/models/shared/book-for-cart.model';
import { ICart } from '../../core/store/state-interfaces/group-cart.state';

@Injectable({ providedIn: 'root' })
export class BookCardsContainerFacade {
  constructor(private readonly store: Store<AppState>) {}

  bookList$(): Observable<IBook[]> {
    return this.store.select(selectBookList);
  }

  isLoading$(): Observable<boolean> {
    return this.store.select(selectIsLoading);
  }

  activeCart$(): Observable<ICart> {
    return this.store.select(selectActiveCart);
  }

  loadBooks(): void {
    this.store.dispatch(
      BooksActions.loadBooks({
        aggregateId: 'a4bd74c3-7c2b-4d57-847e-ef314b6824fd',
      })
    );
  }

  addBook(book: IBook): void {
    this.store.dispatch(GroupCartActions.addBook({ book }));
  }

  removeBook(book: IBook): void {
    this.store.dispatch(GroupCartActions.removeBook({ bookId: book.id }));
  }
}

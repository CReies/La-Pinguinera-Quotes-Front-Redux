import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IBook } from '../../core/models/shared/book.model';
import * as BooksActions from '../../core/store/actions/books.actions';
import {
  selectBookList,
  selectIsLoading,
} from '../../core/store/selectors/books.selector';
import { AppState } from '../../core/store/store';

@Injectable({ providedIn: 'root' })
export class BookCardsContainerFacade {
  constructor(private readonly store: Store<AppState>) {}

  bookList$(): Observable<IBook[]> {
    return this.store.select(selectBookList);
  }

  isLoading$(): Observable<boolean> {
    return this.store.select(selectIsLoading);
  }

  loadBooks(): void {
    this.store.dispatch(
      BooksActions.loadBooks({
        aggregateId: 'a4bd74c3-7c2b-4d57-847e-ef314b6824fd',
      })
    );
  }
}

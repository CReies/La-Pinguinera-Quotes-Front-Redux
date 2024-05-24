import { Component, OnInit } from '@angular/core';
import { BookCardsComponent } from '../../ui/blocks/book-cards/book-cards.component';
import { Observable } from 'rxjs';
import { IBook } from '../../core/models/shared/book.model';
import { BookCardsContainerFacade } from './book-cards-container.facade';
import { AsyncPipe } from '@angular/common';
import { ICart } from '../../core/store/state-interfaces/IGroupCart.state';

@Component({
  selector: 'app-book-cards-container',
  standalone: true,
  imports: [BookCardsComponent, AsyncPipe],
  templateUrl: './book-cards-container.component.html',
})
export class BookCardsContainerComponent implements OnInit {
  public bookList$: Observable<IBook[]>;
  public isLoading$: Observable<boolean>;
  public activeCart$: Observable<ICart>;

  constructor(private readonly facade: BookCardsContainerFacade) {}

  ngOnInit(): void {
    this.facade.loadBooks();
    this.initializeSubscriptions();
  }

  addBook(book): void {
    this.facade.addBook(book);
  }

  removeBook(book): void {
    this.facade.removeBook(book);
  }

  private initializeSubscriptions(): void {
    this.bookList$ = this.facade.bookList$();
    this.isLoading$ = this.facade.isLoading$();
    this.activeCart$ = this.facade.activeCart$();
  }
}

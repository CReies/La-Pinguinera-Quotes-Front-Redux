import { Component, OnInit } from '@angular/core';
import { BookCardsComponent } from '../../ui/blocks/book-cards/book-cards.component';
import { Observable } from 'rxjs';
import { IBook } from '../../core/models/shared/book.model';
import { BookCardsContainerFacade } from './book-cards-container.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book-cards-container',
  standalone: true,
  imports: [BookCardsComponent, AsyncPipe],
  templateUrl: './book-cards-container.component.html',
})
export class BookCardsContainerComponent implements OnInit {
  public bookList$: Observable<IBook[]>;
  public isLoading$: Observable<boolean>;

  constructor(private readonly facade: BookCardsContainerFacade) {}

  ngOnInit(): void {
    this.facade.loadBooks();
    this.initializeSubscriptions();
  }

  private initializeSubscriptions(): void {
    this.bookList$ = this.facade.bookList$();
    this.isLoading$ = this.facade.isLoading$();
  }
}

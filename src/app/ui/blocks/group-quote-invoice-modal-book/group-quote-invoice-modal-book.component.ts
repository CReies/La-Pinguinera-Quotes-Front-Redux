import { Component, Input, OnChanges } from '@angular/core';
import { IBookDetails } from '../../../core/models/shared/book-details.model';
import { CurrencyPipe } from '@angular/common';
import { bookTypeStringArray } from '../../../core/resources/book-type-dictionary';
import { BookType } from '../../../core/models/enums/bookType';

@Component({
  selector: 'app-group-quote-invoice-modal-book',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './group-quote-invoice-modal-book.component.html',
  styleUrl: './group-quote-invoice-modal-book.component.css',
})
export class GroupQuoteInvoiceModalBookComponent implements OnChanges {
  @Input() book: IBookDetails;

  bookType: string;

  ngOnChanges(): void {
    this.bookType = bookTypeStringArray[this.book.type];
  }
}

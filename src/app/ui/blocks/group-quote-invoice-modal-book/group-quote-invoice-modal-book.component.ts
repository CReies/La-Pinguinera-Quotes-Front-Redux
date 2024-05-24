import { Component, Input } from '@angular/core';
import { IBookDetails } from '../../../core/models/shared/book-details.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-group-quote-invoice-modal-book',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './group-quote-invoice-modal-book.component.html',
  styleUrl: './group-quote-invoice-modal-book.component.css',
})
export class GroupQuoteInvoiceModalBookComponent {
  @Input() book: IBookDetails;
}

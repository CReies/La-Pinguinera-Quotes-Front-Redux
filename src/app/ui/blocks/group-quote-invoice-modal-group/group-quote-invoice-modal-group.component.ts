import { Component, Input } from '@angular/core';
import { GroupQuoteInvoiceModalBookComponent } from '../group-quote-invoice-modal-book/group-quote-invoice-modal-book.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-group-quote-invoice-modal-group',
  standalone: true,
  imports: [GroupQuoteInvoiceModalBookComponent, CurrencyPipe],
  templateUrl: './group-quote-invoice-modal-group.component.html',
  styleUrl: './group-quote-invoice-modal-group.component.css',
})
export class GroupQuoteInvoiceModalGroupComponent {
  @Input() group: any;
}

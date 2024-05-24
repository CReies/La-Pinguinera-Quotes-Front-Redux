import { Component, Input } from '@angular/core';
import { ICalculateGroupQuoteResponse } from '../../../core/models/api/response/calculate-quote/calculate-group-quote-response.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-group-quote-invoice-modal',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './group-quote-invoice-modal.component.html',
  styleUrl: './group-quote-invoice-modal.component.css',
})
export class GroupQuoteInvoiceModalComponent {
  @Input() quoteResult: ICalculateGroupQuoteResponse;
}

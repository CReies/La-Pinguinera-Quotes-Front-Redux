import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICalculateGroupQuoteResponse } from '../../../core/models/api/response/calculate-quote/calculate-group-quote-response.model';
import { CurrencyPipe } from '@angular/common';
import { IModalState } from '../../../core/store/state-interfaces/modal.state';
import { TitleComponent } from '../../elements/title/title.component';
import { SvgComponent } from '../../elements/svg/svg.component';
import { GroupQuoteInvoiceModalBookComponent } from '../group-quote-invoice-modal-book/group-quote-invoice-modal-book.component';
import { GroupQuoteInvoiceModalGroupComponent } from '../group-quote-invoice-modal-group/group-quote-invoice-modal-group.component';

@Component({
  selector: 'app-group-quote-invoice-modal',
  standalone: true,
  imports: [
    CurrencyPipe,
    TitleComponent,
    SvgComponent,
    GroupQuoteInvoiceModalBookComponent,
    GroupQuoteInvoiceModalGroupComponent,
  ],
  templateUrl: './group-quote-invoice-modal.component.html',
  styleUrl: './group-quote-invoice-modal.component.css',
})
export class GroupQuoteInvoiceModalComponent {
  @Input() quoteResult: ICalculateGroupQuoteResponse;
  @Input() modal: IModalState['groupQuoteModal'];

  @Output() onClose: EventEmitter<void> = new EventEmitter();

  close(event?: Event): void {
    if (event && event.target !== event.currentTarget) return;
    this.onClose.emit();
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICalculateGroupQuoteResponse } from '../../core/models/api/response/calculate-quote/calculate-group-quote-response.model';
import { GroupQuoteInvoiceModalContainerFacade } from './group-quote-invoice-modal-container.facade';
import { GroupQuoteInvoiceModalComponent } from '../../ui/blocks/group-quote-invoice-modal/group-quote-invoice-modal.component';
import { AsyncPipe } from '@angular/common';
import { IModalState } from '../../core/store/state-interfaces/modal.state';

@Component({
  selector: 'app-group-quote-invoice-modal-container',
  standalone: true,
  imports: [GroupQuoteInvoiceModalComponent, AsyncPipe],
  templateUrl: './group-quote-invoice-modal-container.component.html',
})
export class GroupQuoteInvoiceModalContainerComponent implements OnInit {
  public quoteResult$: Observable<ICalculateGroupQuoteResponse>;
  public groupQuoteModal$: Observable<IModalState['groupQuoteModal']>;

  constructor(private readonly facade: GroupQuoteInvoiceModalContainerFacade) {}

  ngOnInit(): void {
    this.initializeSubscriptions();
  }

  private initializeSubscriptions(): void {
    this.quoteResult$ = this.facade.quoteResult$();
    this.groupQuoteModal$ = this.facade.groupQuoteModal$();
  }

  close(): void {
    this.facade.closeGroupQuoteModal();
  }
}

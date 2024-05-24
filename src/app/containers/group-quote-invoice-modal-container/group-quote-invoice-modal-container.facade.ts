import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/store';
import { CalculateGroupQuoteService } from '../../core/services/api/calculate-quote/calculate-group-quote.service';
import { selectQuoteResult } from '../../core/store/selectors/calculate-group-quote.selector';
import { Observable } from 'rxjs';
import { ICalculateGroupQuoteResponse } from '../../core/models/api/response/calculate-quote/calculate-group-quote-response.model';

@Injectable({ providedIn: 'root' })
export class GroupQuoteInvoiceModalContainerFacade {
  constructor(private readonly store: Store<AppState>) {}

  quoteResult$(): Observable<ICalculateGroupQuoteResponse> {
    return this.store.select(selectQuoteResult);
  }
}

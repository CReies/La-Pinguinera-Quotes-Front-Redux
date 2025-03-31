import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/store';
import { selectQuoteResult } from '../../core/store/selectors/calculate-group-quote.selector';
import { Observable } from 'rxjs';
import { ICalculateGroupQuoteResponse } from '../../core/models/api/response/calculate-quote/calculate-group-quote-response.model';
import { selectGroupQuote } from '../../core/store/selectors/modal.selector';
import { IModalState } from '../../core/store/state-interfaces/modal.state';
import * as ModalActions from '../../core/store/actions/modal.actions';

@Injectable({ providedIn: 'root' })
export class GroupQuoteInvoiceModalContainerFacade {
  constructor(private readonly store: Store<AppState>) {}

  quoteResult$(): Observable<ICalculateGroupQuoteResponse> {
    return this.store.select(selectQuoteResult);
  }

  groupQuoteModal$(): Observable<IModalState['groupQuoteModal']> {
    return this.store.select(selectGroupQuote);
  }

  closeGroupQuoteModal(): void {
    this.store.dispatch(
      ModalActions.setGroupQuoteModalVisibility({ visible: false })
    );
  }
}

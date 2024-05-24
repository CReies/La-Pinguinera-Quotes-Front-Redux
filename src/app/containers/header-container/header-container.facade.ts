import { Injectable } from '@angular/core';
import { StorageService } from '../../core/services/generals/storage.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/store';
import * as CalculateGroupQuoteActions from '../../core/store/actions/calculate-group-quote.actions';
@Injectable({ providedIn: 'root' })
export class HeaderContainerFacade {
  constructor(
    private readonly storageService: StorageService,
    private readonly store: Store<AppState>
  ) {}

  changeCustomerRegisterDate(data) {
    this.storageService.set('registerDate', data);
    this.store.dispatch(
      CalculateGroupQuoteActions.changeCustomerRegisterDate({
        customerRegisterDate: data,
      })
    );
  }
}

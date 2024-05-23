import { Injectable } from '@angular/core';
import { ICreateQuoteAggregateResponse } from '../../../../models/api/response/quote/create-quote-aggregate-response.model';

@Injectable({ providedIn: 'root' })
export class CreateQuoteAggregateResponseMapper {
  map(payload: any): ICreateQuoteAggregateResponse {
    return {
      aggregateId: payload.aggregateId,
    };
  }
}

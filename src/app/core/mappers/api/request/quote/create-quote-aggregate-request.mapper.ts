import { Injectable } from '@angular/core';
import { IGetQuoteAggregateResponse } from '../../../../models/api/response/quote/get-quote-aggregate-response.model';

@Injectable({ providedIn: 'root' })
export class GetQuoteAggregateResponseMapper {
  map(payload: any): IGetQuoteAggregateResponse {
    return { aggregateId: payload.aggregateId };
  }
}

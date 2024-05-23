import { Injectable } from '@angular/core';
import { ICreateQuoteAggregateRequest } from '../../../models/api/request/create-quote-aggregate-request.model';

@Injectable({ providedIn: 'root' })
export class GetQuoteAggregateResponseMapper {
  map(payload: any): ICreateQuoteAggregateRequest {
    return {};
  }
}

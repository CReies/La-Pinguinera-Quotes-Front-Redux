import { Injectable } from '@angular/core';
import { ICalculateGroupQuoteRequest } from '../../../../models/api/request/calculate-quote/calculate-group-quote-request.model';

@Injectable({ providedIn: 'root' })
export class CalculateGroupQuoteRequestMapper {
  map(payload: any): ICalculateGroupQuoteRequest {
    // TODO: Map the payload to the ICalculateGroupQuoteRequest interface
    return payload;
  }
}

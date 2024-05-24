import { Injectable } from '@angular/core';
import { ICalculateGroupQuoteRequest } from '../../../../models/api/request/calculate-quote/calculate-group-quote-request.model';

@Injectable({ providedIn: 'root' })
export class CalculateGroupQuoteRequestMapper {
  map(payload: any): ICalculateGroupQuoteRequest {
    console.log(payload);
    const bookIdsWithQuantity = payload.data.map((cart) => {
      return cart.books.map((book) => {
        return {
          bookId: book.id,
          quantity: book.quantity + 1,
        };
      });
    });

    return {
      AggregateId: payload.aggregateId,
      Group: bookIdsWithQuantity,
      CustomerRegisterDate: payload.customerRegisterDate.split('T')[0],
    };
  }
}

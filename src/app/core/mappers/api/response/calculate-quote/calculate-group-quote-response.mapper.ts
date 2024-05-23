import { Injectable } from '@angular/core';
import { ICalculateGroupQuoteResponse } from '../../../../models/api/response/calculate-quote/calculate-group-quote-response.model';
import { bookTypeDictionary } from '../../../../resources/book-type-dictionary';
import { IBookDetails } from '../../../../models/shared/book-details.model';

@Injectable({ providedIn: 'root' })
export class CalculateGroupQuoteResponseMapper {
  map(payload: any): ICalculateGroupQuoteResponse {
    const groups: ICalculateGroupQuoteResponse['groups'] = payload.groups.map(
      (group: any) => {
        const books: IBookDetails[] = group.books.map((book: any) => {
          const bookType = bookTypeDictionary[book.type];

          return {
            id: book.id,
            title: book.title,
            author: book.author,
            basePrice: book.basePrice,
            discount: book.discount,
            increase: book.increase,
            finalPrice: book.finalPrice,
            type: bookType,
          };
        });
        const totalPrice = group.totalPrice;
        const totalBasePrice = group.totalBasePrice;
        const totalDiscount = group.totalDiscount;
        const totalIncrease = group.totalIncrease;
        return {
          books,
          totalPrice,
          totalBasePrice,
          totalDiscount,
          totalIncrease,
        };
      }
    );
    const totalFinalPrice = payload.totalPrice;
    const totalBasePrice = payload.totalBasePrice;
    const totalDiscount = payload.totalDiscount;
    const totalIncrease = payload.totalIncrease;
    return {
      groups,
      totalFinalPrice,
      totalBasePrice,
      totalDiscount,
      totalIncrease,
    };
  }
}

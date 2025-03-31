import { Injectable } from '@angular/core';
import { IGetAllBooksResponse } from '../../../../models/api/response/books/get-all-books-response.model';
import { bookTypeDictionary } from '../../../../resources/book-type-dictionary';

@Injectable({ providedIn: 'root' })
export class GetallBooksResponseMapper {
  map(payload: any): IGetAllBooksResponse {
    const books = payload.books.map((book: any) => {
      const bookType = bookTypeDictionary[book.type];
      return {
        id: book.id,
        title: book.title,
        author: book.author,
        price: book.price,
        type: bookType,
      };
    });

    return { books };
  }
}

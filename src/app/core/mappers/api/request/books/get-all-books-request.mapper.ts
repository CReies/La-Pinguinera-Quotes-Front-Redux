import { Injectable } from '@angular/core';
import { IGetAllBooksRequest } from '../../../../models/api/request/books/get-all-books-request.model';

@Injectable({ providedIn: 'root' })
export class GetallBooksRequestMapper {
  map(payload: any): IGetAllBooksRequest {
    return { aggregateId: payload };
  }
}

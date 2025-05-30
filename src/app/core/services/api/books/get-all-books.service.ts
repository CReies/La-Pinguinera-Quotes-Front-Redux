import { Injectable } from '@angular/core';
import { HttpService } from '../../generals/http.service';
import { GetallBooksRequestMapper } from '../../../mappers/api/request/books/get-all-books-request.mapper';
import { GetallBooksResponseMapper } from '../../../mappers/api/response/books/get-all-books-response.mapper';
import { IGetAllBooksResponse } from '../../../models/api/response/books/get-all-books-response.model';
import { URL_RESOURCES } from '../../../resources/url.resources';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GetAllBooksService {
  constructor(
    private readonly httpService: HttpService,
    private readonly reqMapper: GetallBooksRequestMapper,
    private readonly resMapper: GetallBooksResponseMapper
  ) {}

  exec(data: string): Observable<IGetAllBooksResponse> {
    const mappedData = this.reqMapper.map(data);
    const url = URL_RESOURCES.books.getAll;
    const result = this.httpService
      .post<IGetAllBooksResponse>(url, mappedData)
      .pipe(map((res) => this.resMapper.map(res)));

    return result;
  }
}

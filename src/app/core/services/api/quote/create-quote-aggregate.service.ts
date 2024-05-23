import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICreateQuoteAggregateRequest } from '../../../models/api/request/quote/create-quote-aggregate-request.model';
import { HttpService } from '../../generals/http.service';
import { URL_RESOURCES } from '../../../resources/url.resources';
import { CreateQuoteAggregateResponseMapper } from '../../../mappers/api/response/quote/create-quote-aggregate-response.mapper';

@Injectable({ providedIn: 'root' })
export class GetQuoteService {
  constructor(
    private readonly httpService: HttpService,
    private readonly resMapper: CreateQuoteAggregateResponseMapper
  ) {}

  exec(data): Observable<ICreateQuoteAggregateRequest> {
    const url = URL_RESOURCES.quote.create;
    const result = this.httpService
      .post<ICreateQuoteAggregateRequest>(url, data)
      .pipe(map((res) => this.resMapper.map(res)));

    return result;
  }
}

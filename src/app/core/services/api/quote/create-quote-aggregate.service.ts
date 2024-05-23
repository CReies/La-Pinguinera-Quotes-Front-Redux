import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreateQuoteAggregateResponseMapper } from '../../../mappers/api/response/quote/create-quote-aggregate-response.mapper';
import { ICreateQuoteAggregateResponse } from '../../../models/api/response/quote/create-quote-aggregate-response.model';
import { URL_RESOURCES } from '../../../resources/url.resources';
import { HttpService } from '../../generals/http.service';

@Injectable({ providedIn: 'root' })
export class CreateQuoteAggregateService {
  constructor(
    private readonly httpService: HttpService,
    private readonly resMapper: CreateQuoteAggregateResponseMapper
  ) {}

  exec(data): Observable<ICreateQuoteAggregateResponse> {
    const url = URL_RESOURCES.quote.create;
    const result = this.httpService
      .post<ICreateQuoteAggregateResponse>(url, data)
      .pipe(map((res) => this.resMapper.map(res)));

    return result;
  }
}

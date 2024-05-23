import { Injectable } from '@angular/core';
import { HttpService } from '../generals/http.service';
import { GetQuoteAggregateResponseMapper } from '../../mappers/api/response/get-quote-aggregate-response.mapper';
import { Observable, map } from 'rxjs';
import { IGetQuoteAggregateResponse } from '../../models/api/response/get-quote-aggregate-response.model';
import { URL_RESOURCES } from '../../resources/url.resources';

@Injectable({ providedIn: 'root' })
export class GetQuoteService {
  constructor(
    private readonly httpService: HttpService,
    private readonly resMapper: GetQuoteAggregateResponseMapper
  ) {}

  exec(): Observable<IGetQuoteAggregateResponse> {
    const url = URL_RESOURCES.quote.get;
    const result = this.httpService
      .get(url)
      .pipe(map((res) => this.resMapper.map(res)));

    return result;
  }
}

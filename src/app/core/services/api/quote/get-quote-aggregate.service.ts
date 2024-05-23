import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpService } from '../../generals/http.service';
import { GetQuoteAggregateResponseMapper } from '../../../mappers/api/request/quote/create-quote-aggregate-request.mapper';
import { URL_RESOURCES } from '../../../resources/url.resources';
import { IGetQuoteAggregateResponse } from '../../../models/api/response/quote/get-quote-aggregate-response.model';

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

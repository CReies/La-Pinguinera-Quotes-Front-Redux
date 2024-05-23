import { Injectable } from '@angular/core';
import { HttpService } from '../../generals/http.service';
import { CalculateGroupQuoteRequestMapper } from '../../../mappers/api/request/calculate-quote/calculate-group-quote-request.mapper';
import { CalculateGroupQuoteResponseMapper } from '../../../mappers/api/response/calculate-quote/calculate-group-quote-response.mapper';
import { ICalculateGroupQuoteResponse } from '../../../models/api/response/calculate-quote/calculate-group-quote-response.model';
import { URL_RESOURCES } from '../../../resources/url.resources';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CalculateGroupQuoteService {
  constructor(
    private readonly httpService: HttpService,
    private readonly reqMapper: CalculateGroupQuoteRequestMapper,
    private readonly resMapper: CalculateGroupQuoteResponseMapper
  ) {}

  exec(data): Observable<ICalculateGroupQuoteResponse> {
    const url = URL_RESOURCES.calculateQuote.group;
    const result = this.httpService
      .post<ICalculateGroupQuoteResponse>(url, this.reqMapper.map(data))
      .pipe(map((res) => this.resMapper.map(res)));

    return result;
  }
}

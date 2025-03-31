import { Injectable } from '@angular/core';
import { HttpService } from '../../generals/http.service';
import { CalculateGroupQuoteRequestMapper } from '../../../mappers/api/request/calculate-quote/calculate-group-quote-request.mapper';
import { CalculateGroupQuoteResponseMapper } from '../../../mappers/api/response/calculate-quote/calculate-group-quote-response.mapper';
import { ICalculateGroupQuoteResponse } from '../../../models/api/response/calculate-quote/calculate-group-quote-response.model';
import { URL_RESOURCES } from '../../../resources/url.resources';
import { Observable, map } from 'rxjs';
import { StorageService } from '../../generals/storage.service';
import { IQuoteAggregate } from '../../../models/shared/quote-aggregate.model';

@Injectable({ providedIn: 'root' })
export class CalculateGroupQuoteService {
  constructor(
    private readonly httpService: HttpService,
    private readonly storageService: StorageService,
    private readonly reqMapper: CalculateGroupQuoteRequestMapper,
    private readonly resMapper: CalculateGroupQuoteResponseMapper
  ) {}

  exec(data): Observable<ICalculateGroupQuoteResponse> {
    const { aggregateId } =
      this.storageService.get<IQuoteAggregate>('quoteAggregate');
    const customerRegisterDate = this.storageService.get<Date>('registerDate');

    const url = URL_RESOURCES.calculateQuote.group;
    const mappedData = this.reqMapper.map({
      aggregateId,
      customerRegisterDate,
      data,
    });

    const result = this.httpService
      .post<ICalculateGroupQuoteResponse>(url, mappedData)
      .pipe(map((res) => this.resMapper.map(res)));

    return result;
  }
}

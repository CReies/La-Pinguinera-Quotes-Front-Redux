import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { StorageService } from '../../core/services/generals/storage.service';
import { GetQuoteAggregateService } from '../../core/services/api/quote/get-quote-aggregate.service';
import { catchError, of, tap } from 'rxjs';

export const getQuoteAggregateResolver: ResolveFn<boolean> = (
  _route,
  _state
) => {
  const getQuoteAggregateService = inject(GetQuoteAggregateService);
  const storageService = inject(StorageService);

  getQuoteAggregateService
    .exec()
    .pipe(
      tap((res) => {
        storageService.set('quoteAggregate', res);
      }),
      catchError((error) => {
        console.error('Error fetching quote aggregate', error);
        return of(false);
      })
    )
    .subscribe();

  storageService.set('registerDate', getRandomDate());

  return true;
};

function getRandomDate(): Date {
  const today = new Date();
  const threeYearsAgo = new Date();
  threeYearsAgo.setFullYear(today.getFullYear() - 3);

  const randomTime =
    threeYearsAgo.getTime() +
    Math.random() * (today.getTime() - threeYearsAgo.getTime());
  return new Date(randomTime);
}

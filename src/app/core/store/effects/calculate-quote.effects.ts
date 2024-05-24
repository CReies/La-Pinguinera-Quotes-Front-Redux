import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CalculateGroupQuoteService } from '../../services/api/calculate-quote/calculate-group-quote.service';
import * as CalculateGroupQuoteActions from '../actions/calculate-group-quote.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CalculateQuoteEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly calculateGroupQuoteService: CalculateGroupQuoteService
  ) {}

  groupQuoteResult$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CalculateGroupQuoteActions.calculateGroupQuoteResult),
      mergeMap((data) =>
        this.calculateGroupQuoteService.exec(data).pipe(
          map((res) =>
            CalculateGroupQuoteActions.calculateGroupQuoteResultSuccess(res)
          ),
          catchError((error) =>
            of(
              CalculateGroupQuoteActions.calculateGroupQuoteResultFailure({
                error,
              })
            )
          )
        )
      )
    )
  );
}

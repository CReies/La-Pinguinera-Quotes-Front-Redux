import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetAllBooksService } from '../../services/api/books/get-all-books.service';
import * as BooksActions from '../actions/books.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class BooksEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly getAllBooksService: GetAllBooksService
  ) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      mergeMap(({ _p: props }) =>
        this.getAllBooksService.exec(props.aggregateId).pipe(
          map((booksResponse) =>
            BooksActions.loadBooksSuccess({ bookList: booksResponse.books })
          ),
          catchError((error) => of(BooksActions.loadBooksFailure({ error })))
        )
      )
    )
  );
}

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { BovisyncService } from '../../services/bovisync.service';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { loadItemMetaDataFailure } from '../actions';

@Injectable()
export class DataEffects {
  loadAnimalData$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Data] Load Animal Data'),
      mergeMap(() =>
        this.bovisyncService.getAnimalData().pipe(
          map((payload) => ({
            type: '[Data] Load Animal Data Success',
            payload,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadItemMetaData$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Data] Load Item Meta Data'),
      mergeMap(() =>
        this.bovisyncService.getItemMetaData().pipe(
          map((payload) => ({
            type: '[Data] Load Item Meta Data Success',
            payload,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadPageMetaData$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Data] Load Page Meta Data'),
      mergeMap(() =>
        this.bovisyncService.getPageMetaData().pipe(
          map((payload) => ({
            type: '[Data] Load Page Meta Data Success',
            payload,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bovisyncService: BovisyncService
  ) {}
}

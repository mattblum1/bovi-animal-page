import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { BovisyncService } from '../../services/bovisync.service';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Data] Load Data'),
      mergeMap(() =>
        this.bovisyncService.getAnimalData().pipe(
          map((payload) => ({
            type: '[Data] Load Data Success',
            payload,
          })),
          tap((payload) => console.warn('payload', payload)),
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

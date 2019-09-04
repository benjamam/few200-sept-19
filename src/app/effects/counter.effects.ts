import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as actions from '../actions/counter.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {

  writeCountByForReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.reset),
      tap(() => localStorage.setItem('by', '1'))
    ), { dispatch: false });

  writeCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.setCountBy),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );

  constructor(private actions$: Actions) { }
}

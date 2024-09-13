import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as action from './sort.action';
import { switchMap } from 'rxjs/operators';
import { sort } from '../lista/lista.action';

@Injectable()
export class SortEffects {
  change$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.change),
      switchMap(({ orderBy }) => [action.changeComplete({ orderBy }), sort()])
    )
  );

  constructor(private actions$: Actions) {}
}

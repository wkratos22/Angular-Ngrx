import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as action from './lista.action';
import {
  exhaustMap,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { Router } from '@angular/router';
import { ListaService } from '../../../../api/lista.service';
import { Store } from '@ngrx/store';
import { selectSortState } from '../sort/sort.selectors';
import { Persona } from '../../../../models/persona.model';
import { selectListaState } from './lista.selectors';

@Injectable()
export class ListaEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.load),
      switchMap(() =>
        this.ListaService.getLista().pipe(
          map((itemPersona) => action.loadComplete({ itemPersona }))
        )
      )
    )
  );

  ordinaIdCrescente$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.ordinaId),
      switchMap(() =>
        this.ListaService.getLista().pipe(
          map((itemPersona) =>
            itemPersona.sort(
              (a, b) =>
                (a.id as unknown as number) - (b.id as unknown as number)
            )
          ),
          map((sortedItemPersona) =>
            action.loadComplete({ itemPersona: sortedItemPersona })
          )
        )
      )
    )
  );

  sort$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.sort),
      withLatestFrom(
        this.store.select(selectListaState),
        this.store.select(selectSortState)
      ),
      map(([, lista, { orderBy, sort }]) => {
        const personeSort = [...lista].sort((a, b) => {
          if (a[orderBy] < b[orderBy] && sort === 'asc') {
            return -1;
          }

          if (a[orderBy] > b[orderBy] && sort === 'asc') {
            return 1;
          }

          if (a[orderBy] < b[orderBy] && sort === 'desc') {
            return 1;
          }

          if (a[orderBy] > b[orderBy] && sort === 'desc') {
            return -1;
          }

          return 0;
        });

        return action.sortComplete({ personeSort });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private ListaService: ListaService
  ) {}
}

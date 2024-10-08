import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as EditAction from './edit.action';
import { catchError, EMPTY, map, mergeMap, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { selectItemById } from '../lista/lista.selectors';
import { Store } from '@ngrx/store';
import * as ListaAction from '../lista/lista.action';

@Injectable()
export class EditEffects {
  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditAction.add),
      mergeMap(
        ({ id }) =>
          of(id).pipe(withLatestFrom(this.store.select(selectItemById(id)))),
        (id, persona) => persona
      ),
      map(([, persona]) => EditAction.addComplete({ persona }))
    )
  );

  addEdit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditAction.addDetail),
      mergeMap(({ id }) =>
        of(id).pipe(
          withLatestFrom(this.store.select(selectItemById(id))),
        )
      ),
      map(([, persona]) => EditAction.addCompleteDetail({ persona }))
    )
  );


  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditAction.save),
      switchMap(({ id, persona }) => [
        EditAction.clear(),
        ListaAction.savePersona({ id, itemPersona: persona }),
      ])
    )
  );

  

  constructor(private actions$: Actions, private store: Store) {}
}

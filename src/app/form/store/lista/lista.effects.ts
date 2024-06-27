import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ListaActions from "../lista/lista.action";
import { switchMap } from "rxjs";

@Injectable()
export class ListaEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListaActions.editPersona)
      
    )
  );


  constructor(
    private readonly actions$: Actions,
  ) {}
}
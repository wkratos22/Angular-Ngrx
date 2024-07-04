import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as action from './lista.action';
import {exhaustMap, map, switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ListaService} from '../../../../api/lista.service';


@Injectable()
export class ListaEffects {


    load$ = createEffect(() =>
        this.actions$.pipe(
          ofType(action.load),
          switchMap(() =>
            this.ListaService
              .getLista()
              .pipe(map((itemPersona) => action.loadComplete({ itemPersona })))
          )
        )
      );

    constructor(private actions$: Actions,
                private ListaService: ListaService) {

    }

}

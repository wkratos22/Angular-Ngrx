import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { ListaEffects } from './form/store/lista/lista.effects';
import { listaReducer } from './form/store/lista/lista.reducer';
import { editReducer } from './form/store/edit/edit.reducer';
import { EditEffects } from './form/store/edit/edit.effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { sortReducer } from './form/store/sort/sort.reducer';
import { SortEffects } from './form/store/sort/sort.effects';
import { paginationReducer } from './form/store/pagination/pagination.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'lista', reducer: listaReducer }),
    provideState({ name: 'edit', reducer: editReducer }),
    provideState({ name: 'sort', reducer: sortReducer }),
    provideState({ name: 'pagination', reducer: paginationReducer }),
    provideEffects([ListaEffects, EditEffects, SortEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideClientHydration(),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
};

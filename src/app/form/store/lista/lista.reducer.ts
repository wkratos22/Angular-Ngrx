import { createReducer, on } from '@ngrx/store';
import * as ListaActions from './lista.action';
import { Persona } from '../../../../models/persona.model';

const initialState: Persona[] = [];

export interface AuthState {
  persona: Persona;
}

export const listaReducer = createReducer(
  initialState,
  on(ListaActions.loadComplete, (state, { itemPersona }) => itemPersona),
  on(ListaActions.savePersona, (state, { id, itemPersona }) => {
    if (id) {
      return state.map((item) => (item.id === id ? {...itemPersona, id} : item));
    }
    return [...state, {...itemPersona, id: new Date().getTime().toString()}];
  }),
  on(ListaActions.deletePersona, (state, { id }) =>
    state.filter((x) => x.id !== id)
  )
);

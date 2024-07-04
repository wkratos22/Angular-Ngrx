import { createReducer, on } from "@ngrx/store";
import * as ListaActions from './lista.action';
import { Persona } from '../../../../models/persona.model';

const initialState: Persona[] = [];

export interface AuthState {
    persona: Persona
}



export const listaReducer = createReducer(
    initialState,
    on(ListaActions.loadComplete, (state, { itemPersona }) => itemPersona),

    on(ListaActions.deletePersona, (state, { id }) => state.filter(x => x.id !== id)),
    
);
  
import { createReducer, on } from '@ngrx/store';
import { Persona } from '../../../../models/persona.model';
import { addComplete } from './edit.action';

const initialState: Persona = {} as Persona;

export const editReducer = createReducer(
  initialState,
  on(addComplete, (_, { persona }) => persona)
);

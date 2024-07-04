import { createReducer, on } from '@ngrx/store';
import { Persona, createPersona } from '../../../../models/persona.model';
import { addComplete, clear, init } from './edit.action';

const initialState: Persona = {} as Persona;

export const editReducer = createReducer(
  initialState,
  on(init, () => createPersona()),
  on(addComplete, (_, { persona }) => persona ?? {} as Persona),
  on(clear, () => ({} as Persona)),
);

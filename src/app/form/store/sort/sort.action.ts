import { createAction, props } from '@ngrx/store';
import { Persona } from '../../../../models/persona.model';

export const change = createAction(
  '[Sort] change',
  props<{ orderBy: keyof Persona }>()
);

export const changeComplete = createAction(
  '[Sort] change complete',
  props<{ orderBy: keyof Persona }>()
);

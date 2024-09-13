import { createAction, props } from '@ngrx/store';
import { Persona } from '../../../../models/persona.model';

export const load = createAction('[App/Lista] load');

export const loadComplete = createAction(
  '[App/Lista] load complete',
  props<{ itemPersona: Persona[] }>()
);

export const sort = createAction('[App/Lista] sort');

export const sortComplete = createAction(
  '[App/Lista] sort complete',
  props<{ personeSort: Persona[] }>()
);

export const savePersona = createAction(
  '[App/Lista] save persona',
  props<{ id: string | undefined; itemPersona: Persona }>()
);

export const deletePersona = createAction(
  '[App/Lista] delete persona',
  props<{ id: string }>()
);

export const ordinaId = createAction('[App/Lista] ordina Id');

export const ordinaDecrescente = createAction('[App/Lista] ordina Id');

export const ordinaEta = createAction('[App/Lista] ordina Età');

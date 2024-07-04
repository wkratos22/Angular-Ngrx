import { createAction, props } from "@ngrx/store";
import { Persona } from "../../../../models/persona.model";

export const init = createAction('[Edit] init');

export const add = createAction('[Edit] add', props<{ id: string }>());

export const addComplete = createAction('[Edit] add complete', props<{ persona: Persona | undefined }>());

export const save = createAction('[Edit] save', props<{ id: string | undefined, persona: Persona }>());

export const clear = createAction('[Edit] clear');
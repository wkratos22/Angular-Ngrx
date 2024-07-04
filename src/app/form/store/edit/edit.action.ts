import { createAction, props } from "@ngrx/store";
import { Persona } from "../../../../models/persona.model";

export const add = createAction('[Edit] add', props<{ personaId: string }>());

export const addComplete = createAction('[Edit] add complete', props<{ persona: Persona }>());
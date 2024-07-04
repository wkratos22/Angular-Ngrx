import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Persona } from '../../../../models/persona.model';

export const selectListaState = createFeatureSelector<Persona[]>('lista');

export const selectItemById = (id: string) => createSelector(selectListaState, (lista) =>
  lista.find((item) => item.id === id)
);

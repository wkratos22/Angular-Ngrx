import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Persona, isEditing } from '../../../../models/persona.model';

export const selectEditState = createFeatureSelector<Persona>('edit');

export const selectEditValue = createSelector(
  selectEditState,
  (state: Persona) => (isEditing(state) ? state : undefined)
);

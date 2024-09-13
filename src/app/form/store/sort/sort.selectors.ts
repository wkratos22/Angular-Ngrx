import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Sort } from '../../../../models/sort';

export const selectSortState = createFeatureSelector<Sort>('sort');

export const selectOrderBy = createSelector(selectSortState, state => state.orderBy);

export const selectSort = createSelector(selectSortState, state => state.sort);

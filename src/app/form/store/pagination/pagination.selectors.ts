import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Pagination } from '../../../../models/pagination';

export const selectPaginationState =
  createFeatureSelector<Pagination>('pagination');

export const selectPageNumber =
  createSelector(selectPaginationState, state => state.pageNumber);

export const selectPageSize =
  createSelector(selectPaginationState, state => state.pageSize);

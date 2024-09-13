import { createReducer, on } from '@ngrx/store';
import { Sort, SortType } from '../../../../models/sort';
import * as SortActions from './sort.action';

const initialState: Sort = {} as Sort;

export const sortReducer = createReducer(
  initialState,
  on(SortActions.changeComplete, (state, { orderBy }) =>
    state.orderBy === orderBy
      ? {
          ...state,
          sort:
            state.sort === 'asc' ? ('desc' as SortType) : ('asc' as SortType),
        }
      : { orderBy, sort: 'asc' as SortType }
  )
);

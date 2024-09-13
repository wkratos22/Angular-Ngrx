import { createReducer } from '@ngrx/store';
import { Pagination } from '../../../../models/pagination';

const initialState: Partial<Pagination> = {
  pageNumber: 1,
  pageSize: 10,
};

export const paginationReducer = createReducer(initialState);

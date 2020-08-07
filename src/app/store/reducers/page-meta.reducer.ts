import { Action, createReducer, on } from '@ngrx/store';
import { loadPageMetaData, loadPageMetaDataSuccess } from '../actions';

import { PageMetaState } from '../models/page-meta.model';

export const initialPageMetaState: PageMetaState = { sections: [] };

export const reducers = createReducer(
  initialPageMetaState,
  on(loadPageMetaData, (state) => {
    console.warn('loadPageMetaData fired', state);
    return state;
  }),
  on(loadPageMetaDataSuccess, (state, { type, ...payload }) => {
    return payload;
  })
);

export function pageMetaReducer(state: PageMetaState, action: Action) {
  return reducers(state, action);
}

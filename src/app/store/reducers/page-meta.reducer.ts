import { Action, createReducer, on } from '@ngrx/store';
import { loadDatas } from '../actions';
import { getInitialState } from '../initial-state';
import { PageMetaState } from '../models/page-meta.model';

export const initialState: PageMetaState = {
  pageMetaState: { sections: [] }
}

import { initialPageMetaState } from '../reducers'

export const intialState = initialPageMetaState;

export const reducers = createReducer(
  initialState,
  on(loadDatas, (state) => {
    console.warn('loadDatas fired', state);
    return state;
  }));

  export function pageMetaReducer(state: PageMetaState, action: Action) {
    return reducers(state, action);
  }

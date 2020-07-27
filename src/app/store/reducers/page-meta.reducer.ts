import { Action, createReducer, on } from '@ngrx/store';
import { loadDatas } from '../actions';
import { PageMetaState } from '../models/page-meta.model';

export const initialPageMetaState: PageMetaState = {
  pageMetaState: { sections: [] }
}

export const reducers = createReducer(
  initialPageMetaState,
  on(loadDatas, (state) => {
    console.warn('loadDatas fired', state);
    return state;
  }));

  export function pageMetaReducer(state: PageMetaState, action: Action) {
    return reducers(state, action);
  }

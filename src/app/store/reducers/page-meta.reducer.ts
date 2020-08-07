import { Action, createReducer, on } from '@ngrx/store';

import { PageMetaState } from '../models/page-meta.model';
import { loadAnimalData } from '../actions';

export const initialPageMetaState: PageMetaState = {
  sections: [],
};

export const reducers = createReducer(
  initialPageMetaState,
  on(loadAnimalData, (state) => {
    console.warn('loadDatas fired', state);
    return state;
  })
);

export function pageMetaReducer(state: PageMetaState, action: Action) {
  return reducers(state, action);
}

import { Action, createReducer, on } from '@ngrx/store';
import { loadData } from '../actions';
import { ItemMetaState } from '../models/item-meta.model';

export const initialMetaState: ItemMetaState = {
  itemMetaState: {
    dataType: '',
    name: '',
    tags: [],
    aggregationFunction: null,
    shortName: '',
    link: null,
    units: null,
    description: '',
  },
};

export const reducers = createReducer(
  initialMetaState,
  on(loadData, (state) => {
    console.warn('loadDatas fired', state);
    return state;
  })
);

export function itemMetaReducer(state: ItemMetaState, action: Action) {
  return reducers(state, action);
}

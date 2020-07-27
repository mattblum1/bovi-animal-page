import { Action, createReducer, on } from '@ngrx/store';
import { loadDatas } from '../actions';
import { getInitialState } from '../initial-state';
import { ItemMetaState } from '../models';

export const initialState: ItemMetaState = {
  itemMetaState: { dataType: '', name: '', tags: [], aggregationFunction: null, shortName: '', link: null, units: null, description: '' }
}

export const intialState = getInitialState().itemMetaState;

export const reducers = createReducer(
  intialState,
  on(loadDatas, (state) => {
    console.warn('loadDatas fired', state);
    return state;
  }));

export function itemMetaReducer(state: ItemMetaState, action: Action) {
  return reducers(state, action);
}
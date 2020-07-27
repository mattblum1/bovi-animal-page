import { Action, createReducer, on } from '@ngrx/store';
import { loadDatas } from '../actions';
import { getInitialState } from '../initial-state';
import { AnimalDataState } from '../models';
import { Maybe } from '../../monads';

export const initialState: AnimalDataState = {
  animalDataState: []
}

export const intialState = getInitialState().animalDataState;

export const reducers = createReducer(
  initialState,
  on(loadDatas, (state) => {
    console.warn('loadDatas fired', state);
    return state;
  }));

export function animalDataReducer(state: AnimalDataState, action: Action) {
  return reducers(state as any, action);
}

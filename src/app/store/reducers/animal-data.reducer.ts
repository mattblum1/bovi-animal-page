import { Action, createReducer, on } from '@ngrx/store';
import { loadDatas } from '../actions';
import { getInitialState } from '../initial-state';
import { AnimalDataState } from '../models/animal-data.model';

export const initialState: AnimalDataState = {
  animalDataState: []
}

import { initialAnimalState } from '../reducers'


export const intialState = initialAnimalState;

export const reducers = createReducer(
  initialState,
  on(loadDatas, (state) => {
    console.warn('loadDatas fired', state);
    return state;
  }));

export function animalDataReducer(state: AnimalDataState, action: Action) {
  return reducers(state as any, action);
}

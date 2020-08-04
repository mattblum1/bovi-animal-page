import { Action, createReducer, on } from '@ngrx/store';
import { loadData } from '../actions';
import { AnimalDataState } from '../models/animal-data.model';

export const initialAnimalState: AnimalDataState = {
  animalDataState: null,
};

export const intialState = initialAnimalState;

export const reducers = createReducer(
  initialAnimalState,
  on(loadData, (state) => {
    console.warn('loadDatas fired', state);
    return state;
  })
);

export function animalDataReducer(state: AnimalDataState, action: Action) {
  return reducers(state as any, action);
}

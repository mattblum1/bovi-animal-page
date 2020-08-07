import { Action, createReducer, on } from '@ngrx/store';
import { loadAnimalData, loadAnimalDataSuccess } from '../actions';

import { AnimalDataState } from '../models/animal-data.model';
import { state } from '@angular/animations';

export const initialAnimalState: AnimalDataState = {
  id: 0,
  SIR: '',
  DIM: 0,
  ApiId: 0,
  AGEMO: 0,
  Repro: '',
  LOCAT: '',
  Pen: 0,
  REPRDate: null,
  BarnNm: '',
  EART: 0,
  BRD: '',
  LACT: 0,
  DCC: 0,
  Barn: 0,
  LMILK: 0,
  ECM: 0,
  DREG: '',
};

export const intialState = initialAnimalState;

export const reducers = createReducer(
  initialAnimalState,
  on(loadAnimalData, (state) => {
    return state;
  }),
  on(loadAnimalDataSuccess, (state, { type, ...payload }) => {
    return payload;
  })
);

export function animalDataReducer(state: AnimalDataState, action: Action) {
  return reducers(state, action);
}

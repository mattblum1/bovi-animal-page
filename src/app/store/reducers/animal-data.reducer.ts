import { Action, createReducer, on } from '@ngrx/store';
import { loadData } from '../actions';
import { AnimalDataState } from '../models/animal-data.model';

export const initialAnimalState: AnimalDataState = {
  id: 0,
  sir: '',
  dim: 0,
  apiId: 0,
  ageMo: 0,
  repro: '',
  locat: '',
  pen: 0,
  reprDate: null,
  barnNm: '',
  earT: 0,
  brd: '',
  lact: 0,
  dcc: 0,
  barn: 0,
  lMilk: 0,
  ecm: 0,
  dreg: '',
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

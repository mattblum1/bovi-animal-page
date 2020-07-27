import { MetaReducer, ActionReducerMap, createReducer, on } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { initializeState } from '../initial-state';
import { State } from '../models';
import { Maybe } from 'src/app/monads';
import { loadDatas, loadDatasSuccess } from '../actions';

export const initialState: State = {
  animalData: Maybe.nothing(),
  itemMetas: [],
  pageMeta: Maybe.nothing()
}

export const reducers = createReducer(
  initializeState,
  on(loadDatas, (state) => {
    console.warn('loadDatasSuccess fired', state);
    return state;
  }));

export const intialState = initializeState();

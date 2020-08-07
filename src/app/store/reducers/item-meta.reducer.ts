import { Action, createReducer, on } from '@ngrx/store';
import {
  loadAnimalData,
  loadAnimalDataSuccess,
  loadItemMetaDataSuccess,
} from '../actions';

import { ItemMetaState } from '../models/item-meta.model';

export const initialMetaState: ItemMetaState = {
  itemMetas: [
    {
      dataType: '',
      name: '',
      tags: [],
      aggregationFunction: null,
      shortName: '',
      link: null,
      units: null,
      description: '',
    },
  ],
};

export const reducers = createReducer(
  initialMetaState,
  on(loadAnimalData, (state) => {
    return state;
  }),
  on(loadItemMetaDataSuccess, (state, { type, ...payload }) => {
    return payload;
  })
);

export function itemMetaReducer(state: ItemMetaState, action: Action) {
  return reducers(state, action);
}

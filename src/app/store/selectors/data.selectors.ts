import { AnimalDataState, ItemMetaState, PageMetaState } from '../models';

import { State } from '../models/state.model';
import { createSelector } from '@ngrx/store';

// Animal Data
export const selectAnimalDataState = (state: State): AnimalDataState =>
  state.animalDataState;

export const selectAnimalData = createSelector(
  selectAnimalDataState,
  (state) => state
);

// Item Meta Data
export const selectItemMetaDataState = (state: State): ItemMetaState =>
  state.itemMetaState;

export const selectItemMetaData = createSelector(
  selectItemMetaDataState,
  (state) => state
);

// Page Meta Data
export const selectPageMetaState = (state: State): PageMetaState =>
  state.pageMetaState;

export const selectPageMetaData = createSelector(
  selectPageMetaState,
  (state) => state
);

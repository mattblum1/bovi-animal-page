import { AnimalDataState, ItemMetaState, PageMetaState } from '../models';
import { createAction, props } from '@ngrx/store';

// Animal Data
export const loadAnimalData = createAction('[Data] Load Animal Data');

export const loadAnimalDataSuccess = createAction(
  '[Data] Load Animal Data Success',
  props<AnimalDataState>()
);

export const loadAnimalDataFailure = createAction(
  '[Data] Load Animal Data Failure',
  props<{ error: any }>()
);

// Item Meta Data
export const loadItemMetaData = createAction('[Data] Load Item Meta Data');

export const loadItemMetaDataSuccess = createAction(
  '[Data] Load Item Meta Data Success',
  props<ItemMetaState>()
);

export const loadItemMetaDataFailure = createAction(
  '[Data] Load Item Meta Data Failure',
  props<{ error: any }>()
);

// Page Meta Data
export const loadPageMetaData = createAction('[Data] Load Page Meta Data');

export const loadPageMetaDataSuccess = createAction(
  '[Data] Load Page Meta Data Success',
  props<PageMetaState>()
);

export const loadPageMetaDataFailure = createAction(
  '[Data] Load Page Meta Data Failure',
  props<{ error: any }>()
);

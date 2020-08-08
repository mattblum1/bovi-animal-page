import { ActionReducerMap } from '@ngrx/store';
import { animalDataReducer } from '../reducers/animal-data.reducer';
import { itemMetaReducer } from '../reducers/item-meta.reducer';
import { pageMetaReducer } from '../reducers/page-meta.reducer';
import { State } from '../models/state.model';

export const reducers: ActionReducerMap<State> = {
    animalDataState: animalDataReducer,
    itemMetaState: itemMetaReducer,
    pageMetaState: pageMetaReducer
}

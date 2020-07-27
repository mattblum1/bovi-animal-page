import { ActionReducerMap } from '@ngrx/store'
import { State } from '../store/models/state.model'
import { animalDataReducer, itemMetaReducer as itemMetaReducer, pageMetaReducer } from './reducers'

export const reducers: ActionReducerMap<State> = {
    animalDataState: animalDataReducer,
    itemMetaState: itemMetaReducer,
    pageMetaState: pageMetaReducer
}

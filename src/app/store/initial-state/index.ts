import { State } from "../models/state.model";
import { initialAnimalState, initialMetaState, initialPageMetaState } from '../reducers'

export function getInitialState(): State {
    return {
        animalDataState: initialAnimalState,
        itemMetaState: initialMetaState,
        pageMetaState: initialPageMetaState
    }
}

import { State } from "../models";
import { initialAnimalState, itemMetaState, pageMetaState } from '../reducers'

export function getInitialState(): State {
    return {
        animalDataState: initialAnimalState,
        itemMetaState: itemMetaState,
        pageMetaState: pageMetaState
    }
}

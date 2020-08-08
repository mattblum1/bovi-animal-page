import { State } from '../models/state.model';
import { initialAnimalState } from '../reducers/animal-data.reducer';
import { initialMetaState } from '../reducers/item-meta.reducer';
import { initialPageMetaState } from '../reducers/page-meta.reducer';

export function getInitialState(): State {
  return {
    animalDataState: initialAnimalState,
    itemMetaState: initialMetaState,
    pageMetaState: initialPageMetaState,
  };
}

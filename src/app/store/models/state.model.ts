import { PageMetaState } from './page-meta.model';
import { ItemMetaState } from './item-meta.model';
import { AnimalDataState } from './animal-data.model';

export interface State {
    animalDataState: AnimalDataState,
    itemMetaState: ItemMetaState,
    pageMetaState: PageMetaState
}

import { AnimalDataState } from './animal-data.model';
import { ItemMetaState } from './item-meta.model';
import { PageMetaState } from './page-meta.model';

export interface State {
  animalDataState: AnimalDataState;
  itemMetaState: ItemMetaState;
  pageMetaState: PageMetaState;
}

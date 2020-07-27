import { PageMeta, ItemMeta, AnimalData } from '.';
import { Maybe } from '../../monads'

export interface State {
    animalData: Maybe<AnimalData>;
    itemMetas: ItemMeta[];
    pageMeta: Maybe<PageMeta>;
}

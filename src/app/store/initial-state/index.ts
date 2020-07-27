import { AnimalData, ItemMeta, PageMeta, State } from '../models'
import { Maybe } from '../../monads';

export const initializeState = (): State => {
    return { animalData: Maybe.nothing(), itemMetas: [], pageMeta: Maybe.nothing() };
};

export interface ItemMetaState {
  itemMetas: ItemMeta[];
}

export interface ItemMeta {
  dataType: string;
  name: string;
  tags: any[];
  aggregationFunction: null | string;
  shortName: string;
  link: Link | null;
  units: null | string;
  description: string;
}

export enum Link {
  COW_PAGE_ID_ANIMAL_ID = '/cowpage/id/ANIMALID/',
  EMPTY = '',
}

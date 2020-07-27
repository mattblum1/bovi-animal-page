export interface ItemMetaState {
    itemMetaState: ItemMeta;
}

export interface ItemMeta {
    dataType:            string;
    name:                string;
    tags:                any[];
    aggregationFunction: null | string;
    shortName:           string;
    link:                Link | null;
    units:               null | string;
    description:         string;
}

export enum Link {
    CowpageIDANIMALID = "/cowpage/id/ANIMALID/",
    Empty = "",
}

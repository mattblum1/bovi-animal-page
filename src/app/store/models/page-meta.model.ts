import { Maybe } from 'src/app/monads/maybe';

export interface PageMetaState {
    pageMetaState: PageMeta;
}

export interface PageMeta {
    sections: Section[];
}

export interface Section {
    label: string;
    items: string[];
}

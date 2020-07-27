import { Maybe } from 'src/app/monads';

export interface AnimalDataState {
    animalDataState: AnimalData[];
}

export interface AnimalData {
    id:       number;
    SIR:      string;
    DIM:      number;
    ApiId:    number;
    AGEMO:    number;
    Repro:    string;
    LOCAT:    string;
    Pen:      number;
    REPRDate: null;
    BarnNm:   string;
    EART:     number;
    BRD:      string;
    LACT:     number;
    DCC:      number;
    Barn:     number;
    LMILK:    number;
    ECM:      number;
    DREG:     string;
}

import { AnimalDataState } from '../store/models/animal-data.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemMetaState } from '../store/models/item-meta.model';
import { Observable } from 'rxjs';
import { PageMetaState } from '../store/models/page-meta.model';

@Injectable({
  providedIn: 'root',
})
export class BovisyncService {
  constructor(private http: HttpClient) {}

  getAnimalData(): Observable<AnimalDataState> {
    const animalData = this.http.get<AnimalDataState>(
      'https://bovisync.bitbucket.io/sample_data/animal_data.json'
    );
    console.warn('animalData', animalData);
    return animalData;
  }

  getPageMetaData(): Observable<PageMetaState> {
    const pegaMetaState = this.http.get<PageMetaState>(
      'https://bovisync.bitbucket.io/sample_data/page_meta.json'
    );
    console.warn('pegaMetaState', pegaMetaState);
    return pegaMetaState;
  }

  getItemMetaData(): Observable<ItemMetaState> {
    const itemMetaState = this.http.get<ItemMetaState>(
      'https://bovisync.bitbucket.io/sample_data/item_meta.json'
    );
    console.warn('itemMetaState', itemMetaState);
    return itemMetaState;
  }
}

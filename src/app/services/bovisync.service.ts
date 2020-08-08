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
    return this.http.get<AnimalDataState>(
      'https://bovisync.bitbucket.io/sample_data/animal_data.json'
    );
  }

  getPageMetaData(): Observable<PageMetaState> {
    return this.http.get<PageMetaState>(
      'https://bovisync.bitbucket.io/sample_data/page_meta.json'
    );
  }

  getItemMetaData(): Observable<ItemMetaState> {
    return this.http.get<ItemMetaState>(
      'https://bovisync.bitbucket.io/sample_data/item_meta.json'
    );
  }
}

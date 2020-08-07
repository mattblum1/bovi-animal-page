import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnimalDataState, ItemMetaState, PageMetaState } from './store/models';
import { Store, select } from '@ngrx/store';
import {
  loadAnimalData,
  loadItemMetaData,
  loadPageMetaData,
} from './store/actions';
import {
  selectAnimalData,
  selectItemMetaData,
  selectPageMetaData,
} from '../../src/app/store/selectors';

import { ItemMeta } from './store/models/item-meta.model';
import { Observable } from 'rxjs';
import { State } from './store/models/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  animalData$: Observable<AnimalDataState> = this.store.pipe(
    select(selectAnimalData)
  );
  itemMetaData$: Observable<ItemMetaState> = this.store.pipe(
    select(selectItemMetaData)
  );
  itemMetaData: ItemMeta[];
  pageMetaData$: Observable<PageMetaState> = this.store.pipe(
    select(selectPageMetaData)
  );

  title = 'BoviSync Animal Page';

  constructor(private store: Store<State>) {
    this.store.dispatch(loadAnimalData());
    this.store.dispatch(loadItemMetaData());
    this.store.dispatch(loadPageMetaData());

    this.itemMetaData$.subscribe((i: any) => (this.itemMetaData = i.payload));
  }

  ngOnInit() {}

  getItemMetaData(itemId: string) {
    const metaData = this.itemMetaData.find((i) => i.shortName === itemId);
    console.warn('metaData', metaData);
    return metaData;
  }

  handleNull(value: any) {
    return value ? value : '-';
  }
}

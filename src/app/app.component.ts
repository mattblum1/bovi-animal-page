import {
  loadAnimalData,
  loadItemMetaData,
  loadPageMetaData,
} from './store/actions';

import { Component } from '@angular/core';
import { State } from './store/models/state.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bovi-animal-page';

  constructor(private store: Store<State>) {
    this.store.dispatch(loadAnimalData());
    this.store.dispatch(loadItemMetaData());
    this.store.dispatch(loadPageMetaData());
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDatas } from './store/actions';
import { State } from './store/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bovi-animal-page';

  constructor(private store: Store<State>) {}

  doStoreAction() {
    console.warn('test');
    this.store.dispatch(loadDatas());
  }
}

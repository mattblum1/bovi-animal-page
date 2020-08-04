import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadData } from './store/actions';
import { State } from './store/models/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bovi-animal-page';

  constructor(private store: Store<State>) {
    this.store.dispatch(loadData());
  }
}

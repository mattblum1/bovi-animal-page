import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { storeLogger } from 'ngrx-store-logger';
import { State } from './store/models';
import { reducers } from './store'

export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

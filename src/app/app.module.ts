import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RootStoreModule} from '@app/core/store/root';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

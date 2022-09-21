import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {RouterModule} from "@angular/router";
import {HeaderModule} from "./components/header/header.module";
import {MainModule} from "./components/main/main.module";
import {FooterModule} from "./components/footer/footer.module";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    RouterModule,
    HeaderModule,
    MainModule,
    FooterModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {
}

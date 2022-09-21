import {NgModule} from '@angular/core';
import {NavigatorPageRoutingModule} from "./navigator-page-routing.module";
import {NavigatorLayoutModule} from "@app/navigator/layout";
import {AppCommonModule} from "../../app-common.module";


@NgModule({
  imports: [
    AppCommonModule,
    NavigatorPageRoutingModule,
    NavigatorLayoutModule,
  ]
})
export class NavigatorPageModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigatorLayoutComponent} from './navigator-layout.component';

import {ContainerModule} from '@app/ui/container';
import {GridModule} from '@app/ui/grid';
import {RouterModule} from "@angular/router";
import {NavigatorDesktopMenuModule} from "./components/navigator-desktop-menu/navigator-desktop-menu.module";
import {AppCommonModule} from "../../app-common.module";
import {NavigatorMobileMenuModule} from "./components/navigator-mobile-menu/navigator-mobile-menu.module";


@NgModule({
  declarations: [
    NavigatorLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContainerModule,
    GridModule,
    NavigatorDesktopMenuModule,
    NavigatorMobileMenuModule,
    AppCommonModule
  ],
  exports: [NavigatorLayoutComponent]
})
export class NavigatorLayoutModule {
}

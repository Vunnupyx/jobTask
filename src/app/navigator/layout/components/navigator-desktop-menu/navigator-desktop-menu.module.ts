import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigatorDesktopMenuComponent} from './navigator-desktop-menu.component';
import {RouterModule} from "@angular/router";
import {NavigationSharedModule} from "@app/core/navigation/shared";
import {NavigatorMenuModule} from "@app/navigator/menu";
import {NavigatorMenuLinkModule} from "../navigator-menu-link/navigator-menu-link.module";


@NgModule({
  declarations: [
    NavigatorDesktopMenuComponent
  ],
  exports: [
    NavigatorDesktopMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavigatorMenuLinkModule,
    NavigatorMenuModule,
    NavigationSharedModule,
  ]
})
export class NavigatorDesktopMenuModule {
}

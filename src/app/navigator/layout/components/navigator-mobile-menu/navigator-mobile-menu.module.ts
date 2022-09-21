import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigatorMobileMenuComponent} from "./navigator-mobile-menu.component";
import {NavigatorMenuLinkModule} from "../navigator-menu-link/navigator-menu-link.module";
import {RouterModule} from "@angular/router";
import {NavigationSharedModule} from "@app/core/navigation/shared";


@NgModule({
  declarations: [NavigatorMobileMenuComponent],
  imports: [
    CommonModule,
    NavigatorMenuLinkModule,
    RouterModule,
    NavigationSharedModule
  ],
  exports: [
    NavigatorMobileMenuComponent
  ],
})
export class NavigatorMobileMenuModule {
}

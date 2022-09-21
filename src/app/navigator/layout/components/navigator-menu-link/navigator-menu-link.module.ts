import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {NavigatorMenuModule} from '@app/navigator/menu';
import {NavigationSharedModule} from '@app/core/navigation/shared';

import {NavigatorMenuLinkComponent} from './navigator-menu-link.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigatorMenuModule, NavigationSharedModule],
  declarations: [NavigatorMenuLinkComponent],
  exports: [NavigatorMenuLinkComponent],
})
export class NavigatorMenuLinkModule {
}

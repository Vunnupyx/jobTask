import { NgModule } from '@angular/core';
import {NavigationSharedModule} from "@app/core/navigation/shared";
import {HeaderComponent} from "./header.component";
import {SideNavModule} from "./components/side-nav/side-nav.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SideNavModule,
    NavigationSharedModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }

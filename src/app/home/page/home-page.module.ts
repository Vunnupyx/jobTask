import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {HomePageRoutingModule} from "./home-page-routing.module";
import {GridModule} from '@app/ui/grid';
import {ContainerModule} from "@app/ui/container";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    GridModule,
    ContainerModule,
  ]
})
export class HomePageModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListTableComponent} from './list-table.component';
import {ContainerModule} from "@app/ui/container";


@NgModule({
  declarations: [
    ListTableComponent
  ],
  exports: [
    ListTableComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
  ]
})
export class ListTableModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {ListPageRoutingModule} from "./list-page-routing.module";
import {ListTableModule} from "./components/list-table/list-table.module";


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    ListTableModule,
  ]
})
export class ListModule {
}

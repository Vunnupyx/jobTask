import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ColumnComponent} from '@app/ui/grid';

@NgModule({
  imports: [CommonModule],
  declarations: [ColumnComponent],
  exports: [ColumnComponent],
})
export class ColumnModule {
}

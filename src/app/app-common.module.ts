import {NgModule} from '@angular/core';

import {ListServiceModule} from '@app/navigator/service';
import {ListStateModule} from '@app/navigator/state';

@NgModule({
  imports: [ListServiceModule, ListStateModule],
})
export class AppCommonModule {
}

import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {ListStorageModule} from '@app/navigator/storage';

import {ListEffects} from './list.effects';
import {ListFacade} from './list.facade';
import {LIST_FEATURE_KEY, reducer} from './list.reducer';

@NgModule({
  imports: [ListStorageModule, StoreModule.forFeature(LIST_FEATURE_KEY, reducer), EffectsModule.forFeature([ListEffects])],
  providers: [ListFacade],
})
export class ListStateModule {
}

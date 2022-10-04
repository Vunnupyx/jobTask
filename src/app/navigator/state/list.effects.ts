import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';

import {fetch} from '@app/core/store/utils';
import {ListStorage} from '@app/navigator/storage';
import * as ListActions from './list.actions';

@Injectable()
export class ListEffects {
  loadLists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.loadLists),
      fetch({
        id: () => 'load-lists',
        run: () => this.listStorage.get().pipe(map((payload) => ListActions.loadListsSuccess({payload}))),
        onError: (action, payload) => ListActions.loadListsFailure({payload}),
      })
    )
  );


  constructor(
    private readonly actions$: Actions,
    private readonly listStorage: ListStorage,
  ) {
  }

  /*ngrxOnInitEffects(): Action {
    return ListActions.loadLists();
  }*/
}

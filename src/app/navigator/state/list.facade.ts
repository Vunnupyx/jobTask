import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {ListDto} from '@app/navigator/common';

import * as ListActions from './list.actions';
import {ListState} from './list.reducer';
import * as ListSelectors from './list.selectors';

@Injectable()
export class ListFacade {
  listsLoadError$ = this.store.pipe(select(ListSelectors.selectListsLoadError));
  listsLoadRun$ = this.store.pipe(select(ListSelectors.selectListsLoadRun));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly actions: Actions, private readonly store: Store<ListState>) {
  }

  lists$ = (id: number): Observable<ListDto[]> => this.store.pipe(select(ListSelectors.selectListsByType({id})));

  load(): void {
    this.dispatch(ListActions.loadLists());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}

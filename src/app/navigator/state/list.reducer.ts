import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';

import {ListDto, ListEntity} from '@app/navigator/common';

import * as ListActions from './list.actions';

export const LIST_FEATURE_KEY = 'lists';

export interface ListState extends EntityState<ListDto> {
  listsLoadError: Record<string, any> | null;
  listsLoadRun: boolean;
}

export const listAdapter: EntityAdapter<ListEntity> = createEntityAdapter<ListEntity>({
  selectId: (list) => list._id,
});

export const listInitialState: ListState = listAdapter.getInitialState({
  listsLoadError: null,
  listsLoadRun: false,
});

export const reducer = createReducer(
  listInitialState,
  on(ListActions.loadLists, (state) => ({
    ...state,
    listsLoadError: null,
    listsLoadRun: true,
  })),
  on(ListActions.loadListsSuccess, (state, {payload}) =>
    listAdapter.setAll(payload, {
      ...state,
      listsLoadRun: false,
    })
  ),
  on(ListActions.loadListsFailure, (state, {payload}) => ({
    ...state,
    listsLoadError: payload,
    listsLoadRun: false,
  })),
);

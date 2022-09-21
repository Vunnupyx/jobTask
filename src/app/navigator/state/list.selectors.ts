import {createFeatureSelector, createSelector} from '@ngrx/store';

import {LIST_FEATURE_KEY, listAdapter, ListState} from './list.reducer';
import {Entity} from "@app/core/common";

const TYPE_LIST: any = {
  1: 'outcome',
  2: 'loan',
  3: 'income'
};

export const selectListState = createFeatureSelector<ListState>(LIST_FEATURE_KEY);

const {selectAll} = listAdapter.getSelectors();

export const selectLists = createSelector(selectListState, (state) => selectAll(state));
export const selectListsByType = (props: Entity) => createSelector(selectLists, (ListEntities) =>
  ListEntities?.filter((List) => List.type === TYPE_LIST[props.id] ?? []));

export const selectListsLoadError = createSelector(selectListState, (state) => state.listsLoadError);

export const selectListsLoadRun = createSelector(selectListState, (state) => state.listsLoadRun);

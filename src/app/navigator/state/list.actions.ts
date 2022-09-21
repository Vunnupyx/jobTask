import {createAction} from '@ngrx/store';

import { payload } from '@app/core/store/utils';
import {ListDto} from '@app/navigator/common';

export const loadLists = createAction('[List] Load Lists');

export const loadListsSuccess = createAction('[List] Load Lists Success', payload<ListDto[]>());

export const loadListsFailure = createAction('[List] Load Lists Failure', payload<Record<string, any>>());

import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {ListDto, ListEntity} from '@app/navigator/common';
import {LISTS_DTO_STUB} from './list.stub';


export function castList(application: ListDto): ListEntity {
  return {
    ...application,
  };
}

@Injectable()
export class ListStorage {
  constructor() {
  }


  get(): Observable<ListEntity[]> {
    return of((LISTS_DTO_STUB).map(castList));
  }
}

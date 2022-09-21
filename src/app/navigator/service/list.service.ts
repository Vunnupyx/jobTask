import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

import {ListDto} from '@app/navigator/common';
import {ListFacade} from '@app/navigator/state';

@Injectable()
export class ListService {
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly listFacade: ListFacade) {
  }

  lists$ = (id: number): Observable<ListDto[]> => this.listFacade.lists$(id).pipe(filter<any>(Boolean));
}

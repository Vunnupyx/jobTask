import {Injectable} from '@angular/core';

import {NavigationLink, NavigationPath} from '@app/core/navigation/common';

export const CONSTRUCTOR_MENU_LINKS: NavigationLink[] = [
  {
    route: NavigationPath.List,
    label: 'Outcome',
    params: {tab: 1},
  },
  {
    route: NavigationPath.List,
    label: 'Loan',
    params: {tab: 2},
  },
  {
    route: NavigationPath.List,
    label: 'Income',
    params: {tab: 3},
  },
];

@Injectable()
export class NavigatorMenuService {
  links(): NavigationLink[] {
    return CONSTRUCTOR_MENU_LINKS;
  }
}

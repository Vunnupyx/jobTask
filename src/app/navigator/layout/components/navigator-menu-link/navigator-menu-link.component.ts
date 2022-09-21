import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {NavigationLink} from '@app/core/navigation/common';

@Component({
  selector: 'app-navigator-menu-link',
  templateUrl: './navigator-menu-link.component.html',
  styleUrls: ['./navigator-menu-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigatorMenuLinkComponent {
  @Input() link!: NavigationLink;
}

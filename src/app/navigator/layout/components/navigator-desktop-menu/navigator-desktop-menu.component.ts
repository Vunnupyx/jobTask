import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavigationLink} from "@app/core/navigation/common";
import {NavigatorMenuService} from "@app/navigator/menu";

@Component({
  selector: 'app-navigator-desktop-menu',
  templateUrl: './navigator-desktop-menu.component.html',
  styleUrls: ['./navigator-desktop-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigatorDesktopMenuComponent implements OnInit {
  links!: NavigationLink[];

  constructor(private readonly navigatorMenuService: NavigatorMenuService) {
  }

  ngOnInit(): void {
    this.links = this.navigatorMenuService.links();
  }

}

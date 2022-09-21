import {Component, OnInit} from '@angular/core';
import {NavigationLink} from "@app/core/navigation/common";
import {NavigatorMenuService} from "@app/navigator/menu";

@Component({
  selector: 'app-navigator-mobile-menu',
  templateUrl: './navigator-mobile-menu.component.html',
  styleUrls: ['./navigator-mobile-menu.component.scss']
})
export class NavigatorMobileMenuComponent implements OnInit {
  links!: NavigationLink[];

  constructor(private readonly navigatorMenuService: NavigatorMenuService) {
  }

  ngOnInit(): void {
    this.links = this.navigatorMenuService.links();
  }

}

import {BreakpointObserver} from "@angular/cdk/layout";
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NavigationService} from "./service/navigation.service";
import {GridBreakpointType, mediaBreakpointUp} from "@app/ui/theme/utils";
// import {Subject, takeUntil, tap} from "rxjs";
import { NavigationPath } from "@app/core/navigation/common";
import {takeUntil, tap} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  NavigationPath = NavigationPath;
  isDesktopScreen = false;

  private readonly destroy$ = new Subject<void>();

  constructor(private navService: NavigationService, private readonly changeDetectorRef: ChangeDetectorRef, private readonly breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(mediaBreakpointUp(GridBreakpointType.Md))
      .pipe(
        tap((breakpoints) => {
          this.isDesktopScreen = breakpoints.matches;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSideNav() {
    this.navService.setShowNav(true);
  }

}

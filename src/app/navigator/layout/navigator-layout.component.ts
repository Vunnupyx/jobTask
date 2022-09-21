import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Subject} from "rxjs";
import {GridBreakpointType, mediaBreakpointUp} from "@app/ui/theme/utils";
import {takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'app-navigator-layout',
  templateUrl: './navigator-layout.component.html',
  styleUrls: ['./navigator-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigatorLayoutComponent implements OnInit {
  isDesktopScreen = false;
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly breakpointObserver: BreakpointObserver) {
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

}

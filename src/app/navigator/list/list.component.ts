import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ListService} from "@app/navigator/service";
import {takeUntil, tap} from "rxjs/operators";
import {ListDto} from "@app/navigator/common";
import {Subject} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  lists!: ListDto[];

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly activatedRoute: ActivatedRoute, private router: Router, private readonly changeDetectorRef: ChangeDetectorRef, private readonly listService: ListService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe((queryParams: Params) => {
        this.listService.lists$(queryParams['tab'])
          .pipe(
            tap((lists) => {
              this.lists = lists;
              this.changeDetectorRef.markForCheck();
            }),
            takeUntil(this.destroy$)
          )
          .subscribe();
      });
  }

}

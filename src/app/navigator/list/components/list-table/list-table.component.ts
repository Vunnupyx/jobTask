import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {ListDto} from "@app/navigator/common";

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTableComponent {
  lists!: ListDto[];

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  @Input() set data(applications: ListDto[]) {
    this.lists = applications;
    this.changeDetectorRef.markForCheck();
  }

}

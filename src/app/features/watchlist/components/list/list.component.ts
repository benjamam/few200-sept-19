import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { WatchlistListItem } from '../../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WatchListState, selectWatchListItems } from '../../reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() items: WatchlistListItem[];
  constructor(private store: Store<WatchListState>) { }

  ngOnInit() {

  }

}

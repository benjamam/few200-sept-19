import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WatchlistListItem } from './models';
import { Store } from '@ngrx/store';
import { WatchListState, selectWatchListItems } from './reducers';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  items$: Observable<WatchlistListItem[]>;
  constructor(private store: Store<WatchListState>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectWatchListItems);
  }

}

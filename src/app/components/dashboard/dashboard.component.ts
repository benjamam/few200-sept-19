import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentCount, selectCountBy } from '../../reducers';


@Component(
  {
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
  }
)
export class DashboardComponent implements OnInit {
  message = 'coming soon!';

  currentCount$: Observable<number>;
  countBy$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.currentCount$ = this.store.select(selectCurrentCount);
    this.countBy$ = this.store.select(selectCountBy);
  }
}

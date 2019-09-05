import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';



@NgModule({
  declarations: [WatchlistComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [WatchlistComponent]
})
export class WatchlistModule { }

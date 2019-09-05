import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { EntryComponent } from './components/entry/entry.component';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './effects/list.effects';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [WatchlistComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([ListEffects]),
    HttpClientModule
  ],
  exports: [WatchlistComponent]
})
export class WatchlistModule { }

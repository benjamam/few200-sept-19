export const featureName = 'watchlistFeature';
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as models from '../models';

export interface WatchListState {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};

// Selectors

// 1. Feature Selector
const selectFeature = createFeatureSelector<WatchListState>(featureName);

// 2. Selector per branch of the feature state
const selectListBranch = createSelector(selectFeature, f => f.list);

// 3. (optional) helpers
const { selectAll: selectAllListEntities } = fromList.adapter.getSelectors(selectListBranch);

// 4. what the components need
// models.WatchListItem[]
export const selectWatchListItems = createSelector(selectAllListEntities, e => e as models.WatchlistListItem[]);

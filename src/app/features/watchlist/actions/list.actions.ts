import { createAction, props } from '@ngrx/store';
import { ListEntity } from '../reducers/list.reducer';

let currentFakeId = 1;

export const showAdded = createAction(
  '[watchlist] list showadded',
  ({ title }: { title: string }) => ({
    entity: {
      id: currentFakeId++ + 'T',
      title
    } as ListEntity
  })
);


export const showsLoaded = createAction(
  '[watchlist] list shows loaded',
  props<{ shows: ListEntity[] }>()
);

export const showAddedSuccess = createAction(
  '[watchlist] list show added successfully',
  props<{ oldid: string, newEntity: ListEntity }>()
);

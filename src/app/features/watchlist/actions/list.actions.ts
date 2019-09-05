import { createAction } from '@ngrx/store';
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

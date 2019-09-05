import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface ListEntity {
  id: string;
  title: string;
}

export interface ListState extends EntityState<ListEntity> {

}

export const adapter = createEntityAdapter<ListEntity>();

const initialState = adapter.getInitialState();
// const initialState: ListState = {
//   ids: ['1', '2'],
//   entities: {
//     1: {
//       id: '1',
//       title: 'Joker'
//     },
//     2: {
//       id: '2',
//       title: 'Game of Thrones'
//     }
//   }
// };

const reducerFunction = createReducer(
  initialState,
  on(actions.showAdded, (state, action) => adapter.addOne(action.entity, state)),
  on(actions.showsLoaded, (state, action) => adapter.addAll(action.shows, state)),
  on(actions.showAddedSuccess, (state, action) => {
    const tempState = adapter.removeOne(action.oldid, state);
    return adapter.addOne(action.newEntity, tempState);
  })
);

export function reducer(state: ListState = initialState, action: Action) {
  return reducerFunction(state, action);
}




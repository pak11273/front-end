import { combineReducers } from 'redux';
import { itemsReducer } from 'src/state/reducers/itemsReducer';
import { userReducer } from 'src/state/reducers/userReducer';

export const rootReducer = combineReducers({
  itemsReducer,
  userReducer,
});

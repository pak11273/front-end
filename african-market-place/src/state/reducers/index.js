import { combineReducers } from 'redux';
import { userReducer } from 'src/state/reducers/userReducer';

export const rootReducer = combineReducers({
  userReducer,
});

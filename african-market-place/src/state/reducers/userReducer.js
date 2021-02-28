// Note:  this file is just for example using redux.  The actual userReducer being used is in src/userReducer.js

import { SAVE_USER } from 'src/state/types/userTypes';

const initialUserState = {
  token: '',
  userId: '',
  uername: '',
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, user_id: action.payload };
    default:
      return state;
  }
};

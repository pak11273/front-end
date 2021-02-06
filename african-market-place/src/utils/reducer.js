// import React from "react";

import {
  SAVE_USER,
  EDIT_ITEM,
  DELETE_ITEM,
  ADD_ITEM,
  ITEM_ID,
} from './actions';
const initialUserState = {
  item_id: [],
  user_id: '',
  items: [],
};
const reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, user_id: action.payload };
    case EDIT_ITEM:
      const newState = { ...state };
      newState.items.forEach(item => {
        if (item.id === action.payload.id) {
          item = action.payload;
        }
      });
      return newState;
    case DELETE_ITEM:
      const stateAfterDelete = { ...state };
      stateAfterDelete.items.forEach((item, idx) => {
        if (item.id === action.payload) {
          stateAfterDelete.items.splice(idx, 1);
        }
      });
      return stateAfterDelete;
    case ADD_ITEM:
      const newItemAdded = { ...state };
      newItemAdded.items.push(action.payload);
      return newItemAdded;
    case ITEM_ID:
      const newItemId = { ...state };
      newItemId.item_id.push(action.payload);
      return newItemId;
    default:
      return state;
  }
};
export default reducer;

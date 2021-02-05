import React from "react";

import {
    SAVE_USER,
    EDIT_ITEM,
    DELETE_ITEM,
    ADD_ITEM,
} from "./actions";
const initialUserState = {
    id: "",
    username: "",
    items: [],
};
const reducer = (state = initialUserState, action) => {
    switch (action.type) {
      case SAVE_USER:
        return action.payload;
      case EDIT_ITEM:
        const newState = { ...state };
        newState.items.forEach((item) => {
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
      default:
        return state;
    }
};
export default reducer;
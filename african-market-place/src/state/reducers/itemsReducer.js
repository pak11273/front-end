import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  ITEM_ID,
} from 'src/state/types/itemsTypes';

const initialUserState = {
  item_id: [],
  items: [],
};
export const itemsReducer = (state = initialUserState, action) => {
  switch (action.type) {
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

import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  ITEM_ID,
} from 'src/state/types/userTypes';

export const editItem = item => {
  return {
    type: EDIT_ITEM,
    payload: item,
  };
};
export const deleteItem = itemId => {
  return {
    type: DELETE_ITEM,
    payload: itemId,
  };
};
export const addItem = itemWithUserId => {
  return {
    type: ADD_ITEM,
    payload: itemWithUserId,
  };
};
export const itemId = itemID => {
  return {
    type: ITEM_ID,
    payload: itemID,
  };
};

import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  ITEM_ID,
  SET_ITEMS,
} from 'src/state/types/itemsTypes';

export const setItems = items => {
  return {
    type: SET_ITEMS,
    payload: items,
  };
};

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

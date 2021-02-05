export const SAVE_USER = "SAVE_USER";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const ITEM_ID = "ITEM_ID";
export const saveUser = (user) => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};
export const editItem = (item) => {
  return {
    type: EDIT_ITEM,
    payload: item,
  };
};
export const deleteItem = (itemId) => {
  return {
    type: DELETE_ITEM,
    payload: itemId,
  };
};
export const addItem = (itemWithUserId) => {
  return {
    type: ADD_ITEM,
    payload: itemWithUserId,
  };
};
export const itemId = (itemID) => {
    return {
        type: ITEM_ID,
        payload: itemID,
    };
};

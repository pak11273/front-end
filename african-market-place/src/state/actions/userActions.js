import { SAVE_USER, SET_USER } from 'src/state/types/userTypes';

export const saveUser = user => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};

export const setUser = ({ userId, username }) => {
  return {
    type: SET_USER,
    payload: { userId, username },
  };
};

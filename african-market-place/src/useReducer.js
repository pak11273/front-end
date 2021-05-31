// We already have a userReducer in redux but we are using this instead so that we can show that we know how to use native react useReducer for state.  This is only for user state.  The other resources such as items will be done by redux and redux thunk

export const UNSET_DISABLED = 'UNSET_DISABLED';
export const SET_DISABLED = 'SET_DISABLED';
export const SET_VALUES = 'SET_VALUES';
export const CLEAR_FORM = 'CLEAR_FORM';

export const initialState = {
  disabled: true,
  initialForm: {
    username: 'demoUser',
    password: 'password',
  },
  errors: {
    username: '',
    password: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case UNSET_DISABLED:
      return {
        disabled: false,
      };
    case SET_DISABLED:
      return {
        disabled: true,
      };
    case SET_VALUES:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CLEAR_FORM:
      return {
        ...state,
        initialForm: { ...initialState.initialForm },
      };
    default:
      return state;
  }
};

export default reducer;

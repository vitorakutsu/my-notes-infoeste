export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export interface UserState {
  user: User;
}

export interface User {
  name: string;
  email: string;
}

const INITIAL_STATE: UserState = {
  user: {
    name: '',
    email: '',
  },
};

export const setUser = (user: User) => {
  return {
    type: SET_USER,
    user,
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
    user: INITIAL_STATE.user,
  };
};

export const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

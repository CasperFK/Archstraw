import types from './types';

const INITIAL_STATE = {
  formFlag: true,
}

const changeFlagSignInReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_FLAG_SIGNIN_TRUE:
      return {
        ...state, formFlag: true
      }
    case types.CHANGE_FLAG_SIGNIN_FALSE:
      return {
        ...state, formFlag: false
      }
    default:
      return state;
  }
}

export default changeFlagSignInReducer;
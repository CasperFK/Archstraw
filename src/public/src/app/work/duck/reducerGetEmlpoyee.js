import types from './types';

const INITIAL_STATE = {
  permanentEmployee: []
}

const getPermanentEmployee = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_PERMANENT_EMPLOYEE:
      return {
        permanentEmployee: [
          ...state.permanentEmployee,
          ...action.employee,
        ]
      }
    case types.CLEAR_PERMANENT_EMPLOYEE:
      return {
        permanentEmployee: []
      }
    default:
      return state;
  }
}

export default getPermanentEmployee;
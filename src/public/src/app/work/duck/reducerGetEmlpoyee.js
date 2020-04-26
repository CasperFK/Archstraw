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
    default:
      return state;
  }
}

export default getPermanentEmployee;
import types from './types';

const INITIAL_STATE = {
  employess: []
}

const createNewEmployer = (state = INITIAL_STATE, action) => {
  const { id, name, surname, phoneNumber, startWork, endWork } = action;
  switch (action.type) {
    case types.ADD_EMPLOYEE:
      return {
        employess: [...state.employess, {
          id,
          name,
          surname,
          phoneNumber,
          startWork,
          endWork,
          state: action.employee.state,
        }]
      }
    default:
      return state;
  }
}

export default createNewEmployer;
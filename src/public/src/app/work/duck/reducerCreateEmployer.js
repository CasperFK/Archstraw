import types from './types';

const INITIAL_STATE = {
  employess: []
}

const createNewEmployer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_EMPLOYER:
      return {
        employess: [...state.employess, {
          id: action.employer.id,
          name: action.employer.name,
          surname: action.employer.surname,
          phoneNumber: action.employer.phoneNumber,
          startWork: action.employer.startWork,
          endWork: action.employer.endWork,
          state: action.employer.state,
        }]
      }
    default:
      return state;
  }
}

export default createNewEmployer;
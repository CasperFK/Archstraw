import types from './types';

const INITIAL_STATE = {
  name: '',
  surname: '',
  phoneNumber: '',
  startWork: '',
  state: 0,
  actualRatio: 1,
}

const createNewEmployer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_EMPLOYER:
      return {
        ...state,
        name: action.employer.name,
        surname: action.employer.surname,
        phoneNumber: action.employer.phoneNumber,
        startWork: action.employer.startWork,
        state: action.employer.state,
        actualRatio: action.employer.actualRatio,
      }
    default:
      return state;
  }
}

export default createNewEmployer;
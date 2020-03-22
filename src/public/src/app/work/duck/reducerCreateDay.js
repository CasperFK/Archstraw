import types from './types';

const INITIAL_STATE = {
  date: '',
  ratio: 1,
  listOfDays: [],
};

const dayService = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_DAY:
      return {
        ...state,
        date: action.value.date,
        ratio: action.value.ratio,
        listOfDays: state.listOfDays.concat({
          date: action.value.date,
          ratio: action.value.ratio,
          employes: [],
        }),
      };
    case types.ADD_EMPLOYER_TO_DAY:
      return {
        ...state,
        listOfDays: action.employer.listOfDays,
      }
    default:
      return state;
  }
};

export default dayService;
import types from './types';

const INITIAL_STATE = {
  date: '',
  ratio: 1,
  listOfDays: []
}

const createDayOfWork = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_DAY:
      return {
        ...state,
        date: action.value.date,
        ratio: action.value.ratio,
        listOfDays: state.listOfDays.concat({
          date: action.value.date,
          ratio: action.value.ratio,
          employees: [],
        })
      }
    default:
      return state;
  }
}

export default createDayOfWork;
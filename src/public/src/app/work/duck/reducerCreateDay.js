import types from './types';

const INITIAL_STATE = {
  date: '',
  ratio: 0,
  backData: [],
};

const dayService = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_DAY:
      return {
        ...state,
        date: action.value.date,
        ratio: action.value.ratio,
        backData: action.value.backData,
      };
    case types.CLEAR_DAY:
      return {
        ...state,
        date: '',
        ratio: 0,
        backData: [],
      }
    default:
      return state;
  }
};

export default dayService;

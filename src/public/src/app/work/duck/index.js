import dayService from './reducerCreateDay';
import createNewEmployer from './reducerCreateEmployer';
import getPermanentEmployee from './reducerGetEmlpoyee';
export { default as types } from './types';
export { default as actions } from './actions';

export default {
  dayService,
  createNewEmployer,
  getPermanentEmployee,
};

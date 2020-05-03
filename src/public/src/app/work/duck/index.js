import dayService from './reducerCreateDay';
import employeeHandle from './reducerCreateEmployer';
import getPermanentEmployee from './reducerGetEmlpoyee';
export { default as types } from './types';
export { default as actions } from './actions';

export default {
  dayService,
  employeeHandle,
  getPermanentEmployee,
};

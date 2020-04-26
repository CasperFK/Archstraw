import types from './types';

const createDay = value => ({
  type: types.CREATE_DAY,
  value,
});

const addEmployer = employee => ({
  type: types.ADD_EMPLOYER,
  employee,
});

const addEmployerToDay = employee => ({
  type: types.ADD_EMPLOYER_TO_DAY,
  employee,
})

const getPermanentEmployeeFromApi = employee => ({
  type: types.GET_PERMANENT_EMPLOYEE,
  employee,
})

export default { createDay, addEmployer, addEmployerToDay, getPermanentEmployeeFromApi };

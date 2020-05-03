import types from './types';

const createDay = value => ({
  type: types.CREATE_DAY,
  value,
});

const addEmployer = employee => ({
  type: types.ADD_EMPLOYEE,
  employee,
});

const getPermanentEmployeeFromApi = employee => ({
  type: types.GET_PERMANENT_EMPLOYEE,
  employee,
})

const updateEmployeeState = (employee, condition) => ({
  type: types.UPDATE_EMPLOYEE,
  employee,
  condition,
})

export default { createDay, addEmployer, getPermanentEmployeeFromApi, updateEmployeeState };

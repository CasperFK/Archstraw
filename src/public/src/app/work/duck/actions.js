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

const updateEmployeeSalaryState = (employee) => ({
  type: types.UPDATE_EMPLOYEE_SALARY_STATUS,
  employee,
})

const clearDay = () => ({
  type: types.CLEAR_DAY
})

const clearEmployee = () => ({
  type: types.CLEAR_EMPLOYEE,
})

const clearPermanentEmployee = () => ({
  type: types.CLEAR_PERMANENT_EMPLOYEE,
})

export default { createDay, clearDay, clearEmployee, clearPermanentEmployee, addEmployer, getPermanentEmployeeFromApi, updateEmployeeState, updateEmployeeSalaryState };

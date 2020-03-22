import types from './types';

const createDay = value => ({
  type: types.CREATE_DAY,
  value,
});

const addEmployer = employer => ({
  type: types.ADD_EMPLOYER,
  employer,
});

const addEmployerToDay = employer => ({
  type: types.ADD_EMPLOYER_TO_DAY,
  employer,
})

export default { createDay, addEmployer, addEmployerToDay };

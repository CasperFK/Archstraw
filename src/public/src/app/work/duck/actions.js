import types from './types';

const createDay = (value) => ({
  type: types.CREATE_DAY,
  value
})

export default { createDay };
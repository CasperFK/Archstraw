import types from './types';

const changeCorrect = (value) => ({
  type: types.CHANGE_FLAG_SIGNIN_TRUE, value
});

const changeIncorrect = (value) => ({
  type: types.CHANGE_FLAG_SIGNIN_FALSE, value
})

export default { changeCorrect, changeIncorrect };
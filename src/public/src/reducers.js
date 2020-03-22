import { combineReducers } from 'redux';
import changeFlagSignInReducer from './app/signIn/duck';
import { default as methods } from './app/work/duck';

const rootReducer = combineReducers({
  signIn: changeFlagSignInReducer,
  dayOfWork: methods.dayService,
  employer: methods.createNewEmployer,
});

export default rootReducer;

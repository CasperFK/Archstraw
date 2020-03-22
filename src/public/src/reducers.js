import { combineReducers } from 'redux';
import changeFlagSignInReducer from './app/signIn/duck';
import createDayOfWork from './app/work/duck';

const rootReducer = combineReducers({
  signIn: changeFlagSignInReducer,
  dayOfWork: createDayOfWork
});

export default rootReducer;


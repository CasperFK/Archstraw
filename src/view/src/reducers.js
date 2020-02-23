import { combineReducers } from 'redux';
import changeFlagSignInReducer from './app/signIn/duck';

const rootReducer = combineReducers({
  signIn: changeFlagSignInReducer,
});

export default rootReducer;


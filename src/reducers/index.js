import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signupReducer';
import createParcelReducer from './createParcelReducer';
import fetchParcelsReducer from './fetchParcelReducer'


export default combineReducers({
  signUpReducer,
  fetchParcelsReducer,
  createParcelReducer,
  loginReducer,
});

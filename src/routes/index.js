import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import history from '../commons/history';
import LoginContainer from '../container/loginContainer';
import SiginupContainer from '../container/signupContainer';
import ParcelContainer from '../container/createParcelContainer';
import Parcels from '../container/parcelViewContainer';
import LogoutPage from '../container/logoutContainer';

const Routes = () => {
  return (
    <Router history={history}>
    <React.Fragment>
      <ToastContainer />
      <Switch>
        <Route path="/" component={LoginContainer} exact />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={SiginupContainer} />
        <Route path="/create" component={ParcelContainer} />
        <Route path="/parcels" component={Parcels} />
        <Route path="/logout" component={LogoutPage} />
      </Switch>
    </React.Fragment>
  </Router>
  )
}
export default Routes;

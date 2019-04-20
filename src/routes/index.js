import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import history from "../commons/history";
import LoginContainer from "../container/loginContainer";

const Routes = () => {
  return (
    <Router history={history}>
    <React.Fragment>
      <ToastContainer />
      <Switch>
        <Route path="/" component={LoginContainer} exact />
        <Route path="/login" component={LoginContainer} />
        {/* <Route path="/signup" component={SiginUpContainer} />
        <Route path="/questions" component={QuestionContainer} /> */}
      </Switch>
    </React.Fragment>
  </Router>
  )
}
export default Routes;

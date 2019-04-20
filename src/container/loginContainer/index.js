import React, { Component } from 'react';
import LoginAction from "../../actions/loginAction";

import Login from "../../components/loginComponent";

export class LoginContainer extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    LoginAction(this.state, this.props);
  };

  render() {
    return (
        <div className="login background-image">
            <Login
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        </div>
    );
  }
}

export default LoginContainer;

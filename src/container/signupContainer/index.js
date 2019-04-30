import React, { Component } from 'react';
import SignUp from '../../components/signupComponent';
import SignupAction from '../../actions/signupAction';
import Navbar from '../../components/navBarComponent';

class SiginupContainer extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    role:'',
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    SignupAction(this.state, this.props);
  };

  render() {
    return (
        <div className="login">
            <Navbar />
            <SignUp
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        </div>
    );
  }
}

export default SiginupContainer;

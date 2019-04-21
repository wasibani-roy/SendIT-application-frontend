import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import CircularProgressLoader from "../../commons/progressLoader";
import LoginAction from "../../actions/loginAction";
import Navbar from "../../components/navBarComponent"
import Login from "../../components/loginComponent";

const jwt = require("jsonwebtoken");

export class LoginContainer extends Component {
  state = {
    loader: {
      success: false,
      loading: false,
    },
    isProcessing: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      const decoded = jwt.decode(nextProps.token);
      console.log(decoded);
      if (decoded) {
        const userID = decoded.identity.user_id;
        localStorage.setItem("userID", userID);
        this.props.history.push("/parcels");
        toast.success("You have successfully signed in", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
        });
        setTimeout(() => window.location.reload('/create'), 100);
      }
    }
    this.setState({ loader: { loading: false } });
    this.setState({ isProcessing: false });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { LoginAction } = this.props;
    const userData = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };
  
    LoginAction(userData);
    this.setState({ loader: { loading: true } });
    this.setState({ isProcessing: true });
  };

  render() {
    const {errors} = this.props;
    const loader = this.state.loader;
    const buttonDisable = this.state.isProcessing;
    return (
        <div className="login">
            <Navbar />
            <CircularProgressLoader {...loader} />
            <Login
                handleChange={this.handleChange}
                errors={errors}
                isProcessing={buttonDisable}
                handleSubmit={this.handleSubmit}
            />
        </div>
    );
  }
}

export const mapStateToProps = state => ({
  token: state.loginReducer.token,
  errors: state.loginReducer.errors,
  isSuccessful: state.loginReducer.isSuccessful,
});

LoginContainer.propTypes = {
  token: PropTypes.string,
  errors: PropTypes.string
};

LoginContainer.defaultProps = {
  token: "",
  errors: "",
};

export default connect(mapStateToProps, { LoginAction})(LoginContainer);

import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";

export class LogoutPage extends Component {
  componentWillMount() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("userID");
    this.props.history.push("/");
    toast.success("You have successfully Logged out", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
    });
  }

  render() {
    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
}

export default LogoutPage;

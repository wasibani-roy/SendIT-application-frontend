import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Login = ({ handleChange, handleSubmit }) => (
    <div className="login-wrapper">
      <div className="col-md-12">
        <h3>SendIT parcel delivery App</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              className="form-control"
              name="email"
              id="email"
              type="email" 
              placeholder="enter email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              className="form-control"
              name="password"
              type="Password" 
              placeholder="enter password"
              onChange={handleChange}
            />
          </div>
          <input id="login-button" type="submit" value="Log In" className="btn btn-primary"/>
          <div className="text-primary">
            Don&apos;t have an account?
            <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
);
Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default Login;

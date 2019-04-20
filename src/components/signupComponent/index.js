import React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';

const SignUp = ({ handleChange, handleSubmit }) => (
    <div className="login-wrapper">
      <div className="col-md-12">
        <h3>SendIT Parcel Delivery</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label 
              htmlFor="username"
            >Username</label>
            <input 
              onChange={handleChange}
              className="form-control"
              id="username"
              type="text" 
              placeholder="enter username"
              required
            />
          </div>
          <div className="form-group">
            <label 
              htmlFor="email"
            >Email</label>
            <input 
              onChange={handleChange}
              className="form-control"
              id="email"
              type="email" 
              placeholder="enter email"
              required
            />
          </div>
          <div className="form-group">
            <label 
              htmlFor="password"
            >Password</label>
            <input 
              onChange={handleChange}
              className="form-control"
              id="password"
              type="Password" 
              placeholder="enter password"
              required
            />
          </div>
          <div className="form-group">
            <label 
              htmlFor="role"
            >role</label>
            <input 
              onChange={handleChange}
              className="form-control"
              id="role"
              type="text" 
              placeholder="enter role"
              required
            />
          </div>
          <p>
            Already have an account?
            <Link to="/login"> Login now</Link>
          </p>
          <button
            type="submit"
            className="btn btn-primary"
            id="signup-button"
          >
          Signup 
          </button>
        </form>
      </div>
    </div>
);
SignUp.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignUp;

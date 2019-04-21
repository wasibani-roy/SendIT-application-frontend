import React from 'react';
import * as PropTypes from 'prop-types';

const Parcel = ({ handleText, handleSubmit }) => (
    <div className="login-wrapper">
    <div className="col-md-12">
      <h3>Create Parcel</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label 
            htmlFor="parcelName"
          >Parcel Name</label>
          <input 
            onChange={handleText}
            className="form-control"
            id="parcel_name"
            type="text" 
            placeholder="enter parcel name"
            required
          />
        </div>
        <div className="form-group">
          <label 
            htmlFor="receiver"
          >Receiver Name</label>
          <input 
            onChange={handleText}
            className="form-control"
            id="receiver"
            type="text" 
            placeholder="enter receiver name"
            required
          />
        </div>
        <div className="form-group">
          <label 
            htmlFor="destination"
          >Destination</label>
          <input 
            onChange={handleText}
            className="form-control"
            id="destination"
            type="text" 
            placeholder="enter destination"
            required
          />
        </div>
        <div className="form-group">
          <label 
            htmlFor="price"
          >Price</label>
          <input 
            onChange={handleText}
            className="form-control"
            id="price"
            type="text" 
            placeholder="enter price"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          id="create-button"
        >
        Create
        </button>
      </form>
    </div>
  </div>
);
Parcel.propTypes = {
  handleText: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Parcel;

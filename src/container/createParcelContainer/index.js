import React, { Component } from 'react';
import Parcel from '../../components/createParcelComponent';
import CreateParcel from '../../actions/createParcelAction';

class ParcelContainer extends Component {
  state = {
    parcel_name: '',
    receiver: '',
    destination: '',
    price: '',
  };

  handleText = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    CreateParcel(this.state, this.props);
  };

  render() {
    return (
      <div className="login background-image content-wrapper">
        <Parcel
          handleText={this.handleText}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default ParcelContainer;

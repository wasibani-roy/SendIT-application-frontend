import React, { Component } from "react";
import { connect } from "react-redux";
import { ParcelItem } from "../../components/parcelItemComponent";
import fetchParcelsAction from "../../actions/fetchParcelAction";

export class Parcels extends Component {
  componentWillMount = () => {
    this.props.fetchParcelsAction();
  };

  render() {
    const { parcels } = this.props;

    const parcelItems = parcels.map((parcel) => {
      return <ParcelItem key={parcel.parcel_name} {...parcel} />;
    });

    return (
      <div className="col-lg-8">
        <div className="article-container">{ parcelItems }</div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    parcels: state.fetchParcelsReducer.parcels,
});

export default connect(
  mapStateToProps,
  { fetchParcelsAction },
)(Parcels);

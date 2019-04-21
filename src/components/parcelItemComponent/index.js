import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ParcelItem extends Component {
  render() {
    return (
      <article>

        <div className="article-text">
          <div className="inner-text">
            <Link to="#" className="article-title">
              <h4>{this.props.parcel_name}</h4>
            </Link>
            <p>
              {this.props.receiver}
            </p>
            <div className="date">
              <table className="table mb-0 borderless">
                <tbody>
                  <tr>
                    <td className="p-0">
                      <i className="fa fa-calendar" />
                      {" "}
                      {"Delivery status"}<br/>
                      {this.props.delivery_status}
                    </td>
                    <td className="p-0 text-center">
                      <i className="fa fa-clock" /> 
                      {" "}
                      {" Destination "}<br/>
                      {this.props.destination}
                    </td>
                    <td className="p-0 text-center">
                      {" "}
                      {" Location "}<br/>
                      {this.props.location}
                    </td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default ParcelItem;

import axios from 'axios';
import { toast } from 'react-toastify';
import { PARCEL_FETCH_SUCCESSFUL, PARCEL_FETCH_NOT_FOUND } from "../types";

const { API_URL } = process.env;

const Header = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
};

const fetchParcelsAction = () => dispatch => {
  return axios.get(`${API_URL}/v2/parcels/user`,
  Header).then((res) => {
    dispatch({
        type: PARCEL_FETCH_SUCCESSFUL,
        payload: res.data,
      });
  }).catch((err) => {
    dispatch({
        type: PARCEL_FETCH_NOT_FOUND,
        payload: err.data.message,
      });
  });
};

export default fetchParcelsAction;

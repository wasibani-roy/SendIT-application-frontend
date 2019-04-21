import axios from 'axios';
import { toast } from 'react-toastify';

const { API_URL } = process.env;

const Header = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
};

const CreateParcel = (data, obj) => {
  const parcel = {
    parcel_name: data.parcel_name,
    receiver: data.receiver,
    destination: data.destination,
    price: data.price,
  };
  return axios.post(`${API_URL}/v2/parcels/`,
  parcel, Header).then((res) => {
    toast.success(res.data.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
      });
      obj.history.push("/parcels");
      
  }).catch((err) => {
    toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
      });
  });
};

export default CreateParcel;

import axios from 'axios';
import { toast } from "react-toastify";

const jwt = require("jsonwebtoken");

const {API_URL} = process.env;

const LoginAction = (data, obj) => {
  const userData = {
    email: data.username,
    password: data.password,
  };

  return axios.post(`${API_URL}/v2/auth/login/`, userData)
    .then((res) => {
      localStorage.setItem('access_token', res.access_token);
      toast.success(res.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
      });
      obj.history.push('/create');
    }).catch((err) => {
    //   console.log(err.response.data.error);
        toast.error("A user with this email and password was not found", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
        });
    });
};
export default LoginAction;

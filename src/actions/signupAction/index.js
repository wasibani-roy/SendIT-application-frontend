import axios from 'axios';
import { toast } from "react-toastify";

const { API_URL } = process.env;

const SignupAction = (data, obj) => {
  const userData = {
    username: data.username,
    email: data.email,
    password: data.password,
    role: data.role,
  };

  return axios.post(`${API_URL}/v2/auth/signup/`, userData)
    .then((res) => {
        toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
          });
      obj.history.push('/login');
    }).catch((err) => {
        toast.error("failed to register please try again", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
          });
    });
};
export default SignupAction;

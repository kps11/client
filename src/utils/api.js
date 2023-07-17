import axios from 'axios'
import { LOGOUT } from '../action/actionTypes';
import store from "../store/index"

const api = axios.create({
    baseURL:"/api",
    headers:{
        'Content-Type' : 'application/json',
        // 'x-auth-token' : localStorage.getItem('token')
    }
})

// api.interceptors.response.use(
//     (res) => res,
//     (err) => {
//       if (err.response.status === 401) {
//         store.dispatch({ type: LOGOUT });
//       }
//       return Promise.reject(err);
//     }
//   );


  api.interceptors.request.use(
    (req) => req,
    (err) => {
      return Promise.reject(err);
    }
  );  


export default api;
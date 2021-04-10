import axios from 'axios';
import { logout } from '../pages/Login/loginSlice';
import { getToken } from './auth';

const instance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

instance.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';

  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      if (process.env.NODE_ENV === 'test') {
        return;
      }
      const store = require('../store').default;
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default instance;

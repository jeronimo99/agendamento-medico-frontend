import axios from './setup';

export const URLS = {
  REGISTER: '/register',
  LOGIN: '/login',
};

const register = (form) => {
  const newForm = { ...form };
  newForm.email = form.email.toLowerCase();
  return axios.post(URLS.REGISTER, newForm);
};

const login = (form) => {
  const newForm = { ...form };
  newForm.email = form.email.toLowerCase();
  return axios.post(URLS.LOGIN, newForm);
};

const API = {
  REGISTER: register,
  LOGIN: login,
};

export default API;

import axios from './setup';

export const URLS = {
  REGISTER: '/register',
};

const register = (form) => {
  const newForm = { ...form };
  newForm.email = form.email.toLowerCase();
  return axios.post(URLS.REGISTER, newForm);
};

const API = {
  REGISTER: register,
};

export default API;

import axios from './setup';

export const URLS = {
  REGISTER: '/register',
  LOGIN: '/login',
  ADD_DOCTOR: '/admin/doctors',
  GET_DOCTORS: '/admin/doctors',
  DELETE_DOCTOR: '/admin/doctors/:id',
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

const addDoctor = (form) => {
  return axios.post(URLS.ADD_DOCTOR, form);
};

const deleteDoctor = (crm) => {
  return axios.delete(URLS.DELETE_DOCTOR.replace(':id', crm));
};

const getDoctors = () => {
  return axios.get(URLS.GET_DOCTORS);
};

const API = {
  REGISTER: register,
  LOGIN: login,
  ADD_DOCTOR: addDoctor,
  GET_DOCTORS: getDoctors,
  DELETE_DOCTOR: deleteDoctor,
};

export default API;

import axios from './setup';

export const URLS = {
  REGISTER: '/register',
  LOGIN: '/login',
  ADD_DOCTOR: '/admin/doctors',
  GET_DOCTORS: '/admin/doctors',
  DELETE_DOCTOR: '/admin/doctors/:id',
  GET_SPECS: '/user/specs',
  GET_DOCTORS_BY_SPEC: '/user/specs/:id/doctors',
  GET_PATIENTS: '/admin/patients',
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

const getSpecs = () => {
  return axios.get(URLS.GET_SPECS);
};

const getDoctorsBySpec = (spec) => {
  return axios.get(URLS.GET_DOCTORS_BY_SPEC.replace(':id', spec));
};

const getPatients = () => {
  return axios.get(URLS.GET_PATIENTS);
};

const API = {
  REGISTER: register,
  LOGIN: login,
  ADD_DOCTOR: addDoctor,
  GET_DOCTORS: getDoctors,
  DELETE_DOCTOR: deleteDoctor,
  GET_SPECS: getSpecs,
  GET_DOCTORS_BY_SPEC: getDoctorsBySpec,
  GET_PATIENTS: getPatients,
};

export default API;

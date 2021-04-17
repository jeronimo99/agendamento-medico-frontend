import axios from './setup';

export const URLS = {
  REGISTER: '/register',
  LOGIN: '/login',
  ADD_DOCTOR: '/admin/doctors',
  GET_DOCTORS: '/admin/doctors',
  DELETE_DOCTOR: '/admin/doctors/:id',
  GET_SPECS: '/user/specs',
  GET_DOCTORS_BY_SPEC: '/user/specs/:id/doctors',
  GET_SCHEDULE_LIST: '/user/doctors/:id/schedule/',
  ADD_SCHEDULE: '/user/doctors/:id/schedule/',
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

const deleteDoctor = (id) => {
  return axios.put(URLS.DELETE_DOCTOR.replace(':id', id));
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

const getScheduleList = (id, date) => {
  const queryParams = {
    date: date,
  };

  return axios.get(URLS.GET_SCHEDULE_LIST.replace(':id', id), {
    params: queryParams,
  });
};

const addSchedule = ({ doctor, date, spec }) => {
  const params = {
    date: date,
    spec: spec,
  };

  return axios.post(URLS.ADD_SCHEDULE.replace(':id', doctor), params);
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
  GET_SCHEDULE_LIST: getScheduleList,
  ADD_SCHEDULE: addSchedule,
  GET_PATIENTS: getPatients,
};

export default API;

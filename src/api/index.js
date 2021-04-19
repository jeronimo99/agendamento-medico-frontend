import axios from './setup';

export const URLS = {
  REGISTER: '/register',
  LOGIN: '/login',
  ADD_DOCTOR: '/admin/doctors',
  GET_DOCTORS: '/admin/doctors',
  DELETE_DOCTOR: '/admin/doctors/:id',
  GET_SPECS: '/user/specs',
  GET_DOCTORS_BY_SPEC: '/user/specs/:id/doctors',
  GET_SCHEDULE_LIST: '/user/doctors/:id/schedule',
  ADD_SCHEDULE: '/user/doctors/:id/schedule',
  GET_PATIENTS: '/admin/patients',
  GET_APPOINTMENTS_BY_DOCTOR: '/admin/doctors/:id/appointments',
  DELETE_APPOINTMENT_ADMIN: '/admin/doctors/:id/appointments',
  GET_APPOINTMENTS_USER: '/user/schedule',
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

const addSchedule = ({ doctor, date, schedule }) => {
  const params = {
    date: date,
    schedule: schedule,
  };

  return axios.post(URLS.ADD_SCHEDULE.replace(':id', doctor), params);
};

const getPatients = () => {
  return axios.get(URLS.GET_PATIENTS);
};

const getAppointmentsByDoctor = (doctor, date) => {
  const queryParams = {
    date: date,
  };

  return axios.get(URLS.GET_APPOINTMENTS_BY_DOCTOR.replace(':id', doctor), {
    params: queryParams,
  });
};

const deleteAppointmentAdmin = ({ doctor, date, schedule }) => {
  const params = {
    date: date,
    schedule: schedule,
  };

  return axios.put(
    URLS.DELETE_APPOINTMENT_ADMIN.replace(':id', doctor),
    params
  );
};

const getAppointmentsUser = (date) => {
  const queryParams = {
    date: date,
  };

  return axios.get(URLS.GET_APPOINTMENTS_USER, {
    params: queryParams,
  });
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
  GET_APPOINTMENTS_BY_DOCTOR: getAppointmentsByDoctor,
  DELETE_APPOINTMENT_ADMIN: deleteAppointmentAdmin,
  GET_APPOINTMENTS_USER: getAppointmentsUser,
};

export default API;

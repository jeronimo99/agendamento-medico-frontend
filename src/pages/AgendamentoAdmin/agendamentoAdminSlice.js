import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import API from '../../api';

export const agendamentoAdminSlice = createSlice({
  name: 'agendamentoAdmin',
  initialState: {
    isLoading: false,
    error: '',
    data: null,
    date: moment().format('YYYY-MM-DD'),
    doctor: '',
    doctorList: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    fetchDoctorsSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.doctorList = action.payload;
    },
    fetchError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchAppointmentsSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
    },
    changeDoctor: (state, action) => {
      state.doctor = action.payload;
    },
    changeDate: (state, action) => {
      state.date = action.payload;
      state.schedule = '';
    },
    clear: (state) => {
      state.isLoading = false;
      state.error = '';
      state.data = null;
      state.doctorList = [];
      state.date = moment().format('YYYY-MM-DD');
    },
  },
});

export const fetchDoctors = () => async (dispatch) => {
  try {
    dispatch(fetchStart());

    const response = await API.GET_DOCTORS();

    dispatch(fetchDoctorsSuccess(response.data.doctors));
  } catch (err) {
    dispatch(fetchError('Houve um problema. Tente novamente mais tarde.'));
  }
};

export const fetchAppointments = (doctor, date) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    const response = await API.GET_APPOINTMENTS_BY_DOCTOR(doctor, date);

    dispatch(fetchAppointmentsSuccess(response.data.appointments));
  } catch (err) {
    dispatch(fetchError('Houve um problema. Tente novamente mais tarde.'));
  }
};

export const {
  fetchStart,
  fetchDoctorsSuccess,
  fetchAppointmentsSuccess,
  fetchError,
  changeDoctor,
  changeDate,
  clear,
} = agendamentoAdminSlice.actions;

export const selectIsLoading = (state) => state.agendamentoAdmin.isLoading;
export const selectError = (state) => state.agendamentoAdmin.error;
export const selectData = (state) => state.agendamentoAdmin.data;
export const selectDoctor = (state) => state.agendamentoAdmin.doctor;
export const selectDoctorList = (state) => state.agendamentoAdmin.doctorList;
export const selectDate = (state) => state.agendamentoAdmin.date;

export default agendamentoAdminSlice.reducer;

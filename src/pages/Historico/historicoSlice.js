import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import API from '../../api';

export const historicoSlice = createSlice({
  name: 'historico',
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
    fetchError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchAppointmentsSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
    },
    changeDate: (state, action) => {
      state.date = action.payload;
      state.schedule = '';
    },
    deleteAppointmentSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      const index = state.data.findIndex(
        (item) => item.appointment === action.payload
      );
      if (index > -1) {
        state.data.splice(index, 1);
      }
    },
  },
});

export const fetchAppointments = (doctor, date) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    const response = await API.GET_APPOINTMENTS_BY_DOCTOR(doctor, date);

    dispatch(fetchAppointmentsSuccess(response.data.appointments));
  } catch (err) {
    dispatch(fetchError('Houve um problema. Tente novamente mais tarde.'));
  }
};

export const deleteAppointment = ({ schedule, doctor, date }) => async (
  dispatch
) => {
  try {
    dispatch(fetchStart());

    await API.DELETE_APPOINTMENT_ADMIN({
      schedule,
      doctor,
      date,
    });

    dispatch(deleteAppointmentSuccess(schedule));
  } catch (err) {
    dispatch(fetchError('Houve um problema. Tente novamente mais tarde.'));
  }
};

export const {
  fetchStart,
  fetchAppointmentsSuccess,
  fetchError,
  changeDate,
  deleteAppointmentSuccess,
  clear,
} = historicoSlice.actions;

export const selectIsLoading = (state) => state.historico.isLoading;
export const selectError = (state) => state.historico.error;
export const selectData = (state) => state.historico.data;
export const selectDoctorList = (state) => state.historico.doctorList;
export const selectDate = (state) => state.historico.date;

export default historicoSlice.reducer;

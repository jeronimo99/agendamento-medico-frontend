import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import API from '../../api';

export const agendamentoSlice = createSlice({
  name: 'agendamento',
  initialState: {
    spec: '',
    specList: [],
    doctor: '',
    doctorList: [],
    date: moment().format('YYYY-MM-DD'),
    schedule: '',
    scheduleList: [],
    isLoading: false,
    isSuccess: false,
    error: '',
  },
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
      state.error = '';
      state.isSuccess = false;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state[action.payload.name] = action.payload.value;
    },
    fetchError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    changeSpec: (state, action) => {
      state.spec = action.payload;
      state.doctor = '';
      state.schedule = '';
    },
    changeDoctor: (state, action) => {
      state.doctor = action.payload;
      state.schedule = '';
    },
    changeDate: (state, action) => {
      state.date = action.payload;
      state.schedule = '';
    },
    change: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    clear: (state) => {
      state.isLoading = false;
      state.error = '';
      state.isSuccess = false;
      state.spec = '';
      state.doctor = '';
      state.date = moment().format('YYYY-MM-DD');
      state.schedule = '';
      state.scheduleList = [];
    },
    addSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.isSuccess = true;
    },
  },
});

export const fetchSpecList = () => async (dispatch) => {
  try {
    dispatch(fetchStart());

    const response = await API.GET_SPECS();

    dispatch(fetchSuccess({ name: 'specList', value: response.data.specs }));
  } catch (err) {
    dispatch(fetchError('Houve um problema. Tente novamente mais tarde.'));
  }
};

export const fetchDoctorList = (spec) => async (dispatch) => {
  try {
    dispatch(fetchStart());

    const response = await API.GET_DOCTORS_BY_SPEC(spec);

    dispatch(
      fetchSuccess({ name: 'doctorList', value: response.data.doctors })
    );
  } catch (err) {
    dispatch(fetchError('Houve um problema. Tente novamente mais tarde.'));
  }
};

export const fetchScheduleList = (doctor, date) => async (dispatch) => {
  try {
    dispatch(fetchStart());

    const response = await API.GET_SCHEDULE_LIST(doctor, date);

    dispatch(
      fetchSuccess({ name: 'scheduleList', value: response.data.scheduleList })
    );
  } catch (err) {
    dispatch(fetchError('Houve um problema. Tente novamente mais tarde.'));
  }
};

export const addSchedule = () => async (dispatch) => {
  try {
    dispatch(fetchStart());

    const response = await API.ADD_SCHEDULE();

    dispatch(addSuccess());
  } catch (err) {
    dispatch(fetchError('Houve um problema. Tente novamente mais tarde.'));
  }
};

export const {
  fetchStart,
  fetchSuccess,
  fetchError,
  changeSpec,
  changeDoctor,
  changeDate,
  change,
  clear,
  addSuccess,
} = agendamentoSlice.actions;

export const selectIsLoading = (state) => state.agendamento.isLoading;
export const selectError = (state) => state.agendamento.error;
export const selectSpec = (state) => state.agendamento.spec;
export const selectSpecList = (state) => state.agendamento.specList;
export const selectDoctor = (state) => state.agendamento.doctor;
export const selectDoctorList = (state) => state.agendamento.doctorList;
export const selectDate = (state) => state.agendamento.date;
export const selectSchedule = (state) => state.agendamento.schedule;
export const selectScheduleList = (state) => state.agendamento.scheduleList;

export default agendamentoSlice.reducer;

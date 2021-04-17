import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import API from '../../api';

export const agendamentoSlice = createSlice({
  name: 'agendamento',
  initialState: {
    spec: '',
    specList: [],
    doctor: '',
    doctorList: '',
    date: moment().format('YYYY-MM-DD'),
    hoursRange: '',
    isLoading: false,
    error: '',
  },
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
      state.error = '';
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
    change: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    clear: (state) => {
      state.isLoading = false;
      state.error = '';
      state.spec = '';
      state.doctor = '';
      state.date = moment().format('YYYY-MM-DD');
      state.hoursRange = '';
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

export const {
  fetchStart,
  fetchSuccess,
  fetchError,
  change,
  clear,
} = agendamentoSlice.actions;

export const selectIsLoading = (state) => state.agendamento.isLoading;
export const selectError = (state) => state.agendamento.error;
export const selectSpec = (state) => state.agendamento.spec;
export const selectSpecList = (state) => state.agendamento.specList;
export const selectDoctor = (state) => state.agendamento.doctor;
export const selectDoctorList = (state) => state.agendamento.doctorList;
export const selectDate = (state) => state.agendamento.date;
export const selectHoursRange = (state) => state.agendamento.hoursRange;

export default agendamentoSlice.reducer;

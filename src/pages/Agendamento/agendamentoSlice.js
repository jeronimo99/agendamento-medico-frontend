import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import API from '../../api';

export const agendamentoSlice = createSlice({
  name: 'agendamento',
  initialState: {
    date: moment().format('YYYY-MM-DD'),
    isLoading: false,
    error: '',
  },
  reducers: {
    addDoctorStart: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    addDoctorSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.data.unshift(action.payload);
    },
    addDoctorError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    change: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    clear: (state) => {
      state.isLoading = false;
      state.error = '';
      state.data = null;
    },
  },
});

export const addDoctor = (form) => async (dispatch) => {
  try {
    dispatch(addDoctorStart());

    const response = await API.ADD_DOCTOR(form);

    dispatch(addDoctorSuccess(response.data.doctor));
  } catch (err) {
    if (err.response && err.response.status === 400) {
      return dispatch(addDoctorError('CRM já existente.'));
    }

    dispatch(addDoctorError('Houve um problema. Tente novamente mais tarde.'));
  }
};

export const {
  addDoctorStart,
  addDoctorSuccess,
  addDoctorError,
  change,
  clear,
} = agendamentoSlice.actions;

export const selectIsLoading = (state) => state.agendamento.isLoading;
export const selectError = (state) => state.agendamento.error;
export const selectDate = (state) => state.agendamento.date;

export default agendamentoSlice.reducer;

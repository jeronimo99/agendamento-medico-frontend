import { createSlice } from '@reduxjs/toolkit';
import API from '../../api';

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    isLoading: false,
    error: '',
    data: null,
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

    fetchDoctorsStart: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    fetchDoctorsSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
    },
    fetchDoctorsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    deleteDoctorStart: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    deleteDoctorSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      const index = state.data.findIndex((item) => item._id === action.payload);
      if (index > -1) {
        state.data.splice(index, 1);
      }
    },
    deleteDoctorError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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

export const fetchDoctors = () => async (dispatch) => {
  try {
    dispatch(fetchDoctorsStart());

    const response = await API.GET_DOCTORS();

    dispatch(fetchDoctorsSuccess(response.data.doctors));
  } catch (err) {
    dispatch(
      fetchDoctorsError('Houve um problema. Tente novamente mais tarde.')
    );
  }
};

export const deleteDoctor = (id) => async (dispatch) => {
  try {
    dispatch(deleteDoctorStart());

    await API.DELETE_DOCTOR(id);

    dispatch(deleteDoctorSuccess(id));
  } catch (err) {
    dispatch(
      deleteDoctorError('Houve um problema. Tente novamente mais tarde.')
    );
  }
};

export const {
  addDoctorStart,
  addDoctorSuccess,
  addDoctorError,
  fetchDoctorsStart,
  fetchDoctorsSuccess,
  fetchDoctorsError,
  deleteDoctorStart,
  deleteDoctorSuccess,
  deleteDoctorError,
  clear,
} = doctorsSlice.actions;

export const selectIsLoading = (state) => state.doctors.isLoading;
export const selectError = (state) => state.doctors.error;
export const selectData = (state) => state.doctors.data;

export default doctorsSlice.reducer;

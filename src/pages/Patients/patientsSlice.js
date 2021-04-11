import { createSlice } from '@reduxjs/toolkit';
import API from '../../api';

export const patientsSlice = createSlice({
  name: 'patients',
  initialState: {
    isLoading: false,
    error: '',
    data: null,
    filter: '',
    filteredData: null,
  },
  reducers: {
    fetchPatientsStart: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    fetchPatientsSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    fetchPatientsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clear: (state) => {
      state.isLoading = false;
      state.error = '';
      state.data = null;
      state.filter = '';
      state.filteredData = null;
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
      state.filteredData = state.data.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const fetchPatients = () => async (dispatch) => {
  try {
    dispatch(fetchPatientsStart());

    const response = await API.GET_PATIENTS();

    dispatch(fetchPatientsSuccess(response.data.patients));
  } catch (err) {
    dispatch(
      fetchPatientsError('Houve um problema. Tente novamente mais tarde.')
    );
  }
};

export const {
  fetchPatientsStart,
  fetchPatientsSuccess,
  fetchPatientsError,
  clear,
  changeFilter,
} = patientsSlice.actions;

export const selectIsLoading = (state) => state.patients.isLoading;
export const selectError = (state) => state.patients.error;
export const selectData = (state) => state.patients.data;
export const selectFilter = (state) => state.patients.filter;
export const selectFilteredData = (state) => state.patients.filteredData;

export default patientsSlice.reducer;

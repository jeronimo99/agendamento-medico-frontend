import { createSlice } from '@reduxjs/toolkit';
import API from '../../api';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    isLoading: false,
    error: '',
  },
  reducers: {
    registerStart: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    registerSuccess: (state) => {
      state.isLoading = false;
      state.error = '';
    },
    registerError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const register = (form) => async (dispatch) => {
  try {
    dispatch(registerStart());

    const response = await API.REGISTER(form);

    dispatch(registerSuccess());
  } catch (err) {
    console.log(err.response);
    if (err.response.status === 400) {
      return dispatch(registerError('Email já cadastrado.'));
    }

    dispatch(registerError('Houve um problema. Tente novamente mais tarde.'));
  }
};

export const {
  registerStart,
  registerSuccess,
  registerError,
} = registerSlice.actions;

export const selectIsLoading = (state) => state.register.isLoading;
export const selectError = (state) => state.register.error;

export default registerSlice.reducer;

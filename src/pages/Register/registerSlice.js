import { createSlice } from '@reduxjs/toolkit';
import API from '../../api';
import { loginSuccess } from '../Login/loginSlice';
import { setToken, setRole } from '../../api/auth';

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

    setToken(response.data.token);
    setRole(response.data.role);
    dispatch(
      loginSuccess({ token: response.data.token, role: response.data.role })
    );

    dispatch(registerSuccess());
  } catch (err) {
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

import { createSlice } from '@reduxjs/toolkit';
import API from '../../api';
import {
  getToken,
  setToken,
  removeToken,
  getRole,
  setRole,
  removeRole,
} from '../../api/auth';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoading: false,
    error: '',
    token: getToken(),
    role: getRole(),
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    loginError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.role = null;
    },
  },
});

export const login = (form) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const response = await API.LOGIN(form);

    setToken(response.data.token);
    setRole(response.data.role);
    dispatch(
      loginSuccess({ token: response.data.token, role: response.data.role })
    );
  } catch (err) {
    if (err.response.status === 400) {
      return dispatch(loginError('Email ou senha incorretos.'));
    }

    dispatch(loginError('Houve um problema. Tente novamente mais tarde.'));
  }
};

export const logout = () => (dispatch) => {
  removeToken();
  removeRole();
  dispatch(logoutSuccess());
};

export const {
  loginStart,
  loginSuccess,
  loginError,
  logoutSuccess,
} = loginSlice.actions;

export const selectIsLoading = (state) => state.login.isLoading;
export const selectError = (state) => state.login.error;
export const selectIsAdmin = (state) =>
  state.login.token && state.login.role === 'admin';
export const selectIsUser = (state) =>
  state.login.token && state.login.role === 'user';

export default loginSlice.reducer;

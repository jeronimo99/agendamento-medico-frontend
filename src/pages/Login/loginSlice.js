import { createSlice } from '@reduxjs/toolkit';
import API from '../../api';
import { getToken, setToken, removeToken } from '../../api/auth';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoading: false,
    error: '',
    token: getToken(),
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.token = action.payload;
    },
    loginError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.token = null;
    },
  },
});

export const login = (form) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const response = await API.LOGIN(form);

    setToken(response.data.token);
    dispatch(loginSuccess(response.data.token));
  } catch (err) {
    if (err.response.status === 400) {
      return dispatch(loginError('Email ou senha incorretos.'));
    }

    dispatch(loginError('Houve um problema. Tente novamente mais tarde.'));
  }
};

export const logout = () => (dispatch) => {
  removeToken();
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
export const selectIsAuth = (state) => !!state.login.token;

export default loginSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';

import registerReducer from './pages/Register/registerSlice';
import loginReducer from './pages/Login/loginSlice';

export const rootReducer = {
  register: registerReducer,
  login: loginReducer,
};

export default configureStore({
  reducer: rootReducer,
});

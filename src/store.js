import { configureStore } from '@reduxjs/toolkit';

import registerReducer from './pages/Register/registerSlice';
import loginReducer from './pages/Login/loginSlice';
import doctorsReducer from './pages/Doctors/doctorsSlice';

export const rootReducer = {
  register: registerReducer,
  login: loginReducer,
  doctors: doctorsReducer,
};

export default configureStore({
  reducer: rootReducer,
});

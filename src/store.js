import { configureStore } from '@reduxjs/toolkit';

import registerReducer from './pages/Register/registerSlice';

export const rootReducer = {
  register: registerReducer,
};

export default configureStore({
  reducer: rootReducer,
});

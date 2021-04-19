import { configureStore } from '@reduxjs/toolkit';

import registerReducer from './pages/Register/registerSlice';
import loginReducer from './pages/Login/loginSlice';
import doctorsReducer from './pages/Doctors/doctorsSlice';
import patientsReducer from './pages/Patients/patientsSlice';
import agendamentoReducer from './pages/Agendamento/agendamentoSlice';
import agendamentoAdminReducer from './pages/AgendamentoAdmin/agendamentoAdminSlice';
import historicoReducer from './pages/Historico/historicoSlice';

export const rootReducer = {
  register: registerReducer,
  login: loginReducer,
  doctors: doctorsReducer,
  patients: patientsReducer,
  agendamento: agendamentoReducer,
  agendamentoAdmin: agendamentoAdminReducer,
  historico: historicoReducer,
};

export default configureStore({
  reducer: rootReducer,
});

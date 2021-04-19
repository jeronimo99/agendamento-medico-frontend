import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Main from './pages/Main';
import Agendamento from './pages/Agendamento';

import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import AgendamentoAdmin from './pages/AgendamentoAdmin';
import Historico from './pages/Historico';

import { selectIsAdmin, selectIsUser } from './pages/Login/loginSlice';

function App() {
  const isAdmin = useSelector(selectIsAdmin);
  const isUser = useSelector(selectIsUser);

  return (
    <Switch>
      {isUser && <Route path="/" exact component={Main} />}
      {isUser && <Route path="/agendamento" exact component={Agendamento} />}
      {isUser && <Route path="/historico" exact component={Historico} />}

      {isAdmin && <Route path="/admin" exact component={Admin} />}
      {isAdmin && <Route path="/admin/medicos" exact component={Doctors} />}
      {isAdmin && <Route path="/admin/pacientes" exact component={Patients} />}
      {isAdmin && (
        <Route path="/admin/agendamento" exact component={AgendamentoAdmin} />
      )}

      <Route path="/login" component={Login} />
      <Route path="/registrar" component={Register} />
      <Redirect to="/login" />
    </Switch>
  );
}

export default App;

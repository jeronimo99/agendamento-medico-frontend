import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Main from './pages/Main';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import AddDoctor from './pages/AddDoctor';

import { selectIsAdmin, selectIsUser } from './pages/Login/loginSlice';

function App() {
  const isAdmin = useSelector(selectIsAdmin);
  const isUser = useSelector(selectIsUser);

  return (
    <Switch>
      {isUser && <Route path="/" exact component={Main} />}

      {isAdmin && <Route path="/admin" exact component={Admin} />}
      {isAdmin && (
        <Route path="/admin/adicionar-medico" exact component={AddDoctor} />
      )}

      <Route path="/login" component={Login} />
      <Route path="/registrar" component={Register} />
      <Redirect to="/login" />
    </Switch>
  );
}

export default App;

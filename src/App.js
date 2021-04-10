import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/registrar" component={Register} />
      <Redirect to="/login" />
    </Switch>
  );
}

export default App;

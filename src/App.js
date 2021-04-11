import React, { useLayoutEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Main from './pages/Main';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';

import { selectIsAuth, selectRole } from './pages/Login/loginSlice';

function App() {
  const isAuth = useSelector(selectIsAuth);
  const role = useSelector(selectRole);
  const history = useHistory();

  useLayoutEffect(() => {
    console.log(role);
    if (isAuth && role === 'user') {
      history.push('/');
    } else if (isAuth && role === 'admin') {
      history.push('/admin');
    }
  }, [history, isAuth, role]);

  return (
    <Switch>
      {isAuth && role === 'user' && <Route path="/" exact component={Main} />}
      {isAuth && role === 'admin' && <Route path="/admin" component={Admin} />}
      <Route path="/login" component={Login} />
      <Route path="/registrar" component={Register} />
      <Redirect to="/login" />
    </Switch>
  );
}

export default App;

import React, { useLayoutEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';

import { selectIsAuth } from './pages/Login/loginSlice';

function App() {
  const isAuth = useSelector(selectIsAuth);
  const history = useHistory();

  useLayoutEffect(() => {
    if (isAuth) {
      history.push('/');
    }
  }, [history, isAuth]);

  return (
    <Switch>
      {isAuth && <Route path="/" exact component={Main} />}
      <Route path="/login" component={Login} />
      <Route path="/registrar" component={Register} />
      <Redirect to="/login" />
    </Switch>
  );
}

export default App;

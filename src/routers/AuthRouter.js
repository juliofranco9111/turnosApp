import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { AuthPrivateRoute } from './AuthPrivateRoute';
import { AuthPublicRoute } from './AuthPublicRouter';

import { Loading } from '../components/ui/Loading';
import { startChecking } from '../actions/auth';

import { LoginScreen } from '../pages/auth/LoginScreen';
import { RegisterScreen } from '../pages/auth/RegisterScreen';
import { HomeRouter } from './HomeRouter';
import { getTheme } from '../actions/ui';

export const AuthRouter = () => {
  const dispatch = useDispatch();
  const { uid, checking } = useSelector((state) => state.auth);

  dispatch(getTheme());
  


  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <Loading />;
  } else {
    return (
      <Router>
        <div>
          <Switch>
            <AuthPublicRoute
            exact
              path='/ingreso'
              component={LoginScreen}
              isLoggedIn={!!uid}
            />
            <AuthPublicRoute
            exact
              path='/registro/:type'
              component={RegisterScreen}
              isLoggedIn={!!uid}
            />

            <AuthPrivateRoute
              exact
              path='/inicio'
              component={HomeRouter}
              isLoggedIn={!!uid}
            />

            <Redirect to='/inicio' />
          </Switch>
        </div>
      </Router>
    );
  }
};

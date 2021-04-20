import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRouter';


import { Loading } from '../components/ui/Loading';
import { startChecking } from '../actions/auth';


import { LoginScreen } from '../pages/auth/LoginScreen';
import { RegisterScreen } from '../pages/auth/RegisterScreen';
import { HomeScreen } from '../pages/HomeScreen';


export const AuthRouter = () => {
  const dispatch = useDispatch();

  const { uid, checking } = useSelector((state) => state.auth);

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

            <PublicRoute
              path='/ingreso'
              component={LoginScreen}
              isLoggedIn={!!uid}
            />
            <PublicRoute
              path='/registro/:type'
              component={RegisterScreen}
              isLoggedIn={!!uid}
            />

            <PrivateRoute
              exact
              path='/home'
              component={HomeScreen}
              isLoggedIn={!!uid}
            />

            <Redirect to='/ingreso' />
          </Switch>
        </div>
      </Router>
    );
  }
};

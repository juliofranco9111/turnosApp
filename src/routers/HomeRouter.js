import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { PatientsScreen } from '../pages/PatientsScreen';
import { PendingScreen } from '../pages/PendingScreen';
import { ProfileScreen } from '../pages/ProfileScreen';




export const HomeRouter = () => {

  return (
    <Router>
      <div>
        <Switch>

          <Route
            exact
            path='/perfil'
            component={ProfileScreen}
          />
          <Route
            exact
            path='/pendientes'
            component={PendingScreen}
          />

          <Route
            exact
            path='/pacientes'
            component={PatientsScreen}
          />
        </Switch>
      </div>
    </Router>
  );

};

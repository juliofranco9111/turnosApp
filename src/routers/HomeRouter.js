import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { getProfileUser } from '../actions/user';
import { SideBar } from '../components/ui/SideBar';
import { HomeScreen } from '../pages/HomeScreen';
import { PatientsScreen } from '../pages/PatientsScreen';
import { PendingScreen } from '../pages/PendingScreen';
import { ProfileScreen } from '../pages/ProfileScreen';
import { NewAppointmentScreen } from '../pages/NewAppointmentScreen';
import { AppointmentsScreen } from '../pages/AppointmentsScreen';
import { NavBarMobile } from '../components/ui/NavBarMobile';

export const HomeRouter = () => {
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileUser(uid));
  }, [dispatch, uid]);

  return (
    <Router>
      <div className='flex'>
        <SideBar />
        <NavBarMobile />
        <div className='min-h-screen w-full md:ml-52 p-3'>
          <Switch>
            <Route path='/inicio' component={HomeScreen} />
            <Route path='/pendientes' component={PendingScreen} />
            <Route path='/pacientes' component={PatientsScreen} />
            <Route path='/perfil' component={ProfileScreen} />
            <Route path='/nuevo' component={NewAppointmentScreen} />
            <Route path='/turnos' component={AppointmentsScreen} />
            <Redirect to='/inicio' />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

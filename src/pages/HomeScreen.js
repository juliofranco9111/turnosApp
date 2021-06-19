import React from 'react';
import { NewAppointmentScreen } from './user/NewAppointmentScreen';

export const HomeScreen = () => {
  return (
    <div className='mx-auto w-full lg:w-5/12 p-3 rounded h-auto'>
      <NewAppointmentScreen />
    </div>
  );
};

import React from 'react';
import { NewAppointmentReq } from './NewAppoitmentReq';

export const HomeScreen = () => {
  return (
    <div className='mx-auto w-full lg:w-5/12 p-3 bg-gray-50 rounded h-auto dark:bg-gray-800'>
      <NewAppointmentReq />
    </div>
  );
};

import React from 'react';
import { PatientsTable } from '../../components/ui/PatientsTable';

export const PatientsScreen = () => {
  return (
    <div className='mx-auto w-full md:pl-12 md:w-10/12 xl:w-10/12'>

      
      <PatientsTable />
    </div>
  );
};

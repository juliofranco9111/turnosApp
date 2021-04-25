import React from 'react';
import { PatientItem } from './PatientItem';

export const TableBody = () => {
  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-3 bg-gray-50 dark:bg-gray-800 rounded-b p-3'>
      <PatientItem />
      <PatientItem />
      <PatientItem />
      <PatientItem />
      <PatientItem />
      <PatientItem />
     
    </div>
  );
};

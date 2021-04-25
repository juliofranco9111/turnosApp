import React from 'react';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';

export const PatientsTable = () => {
  return (
    <>

      <TableHead />
      <div className='mx-auto table__patients overflow-y-auto overflow-x-hidden'>
        <TableBody />
      </div>
    </>
  );
};

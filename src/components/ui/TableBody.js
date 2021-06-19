import React from 'react';
import { PatientItem } from './PatientItem';

export const TableBody = ({ users }) => {


  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-3 bg-gray-50 dark:bg-gray-800 rounded-b p-3'>
      {
      users.length > 0 ? users.map((user) => (
        <PatientItem
          key={ user.cell }
          name={`${user.name.first} ${user.name.last}`}
          img={user.picture.medium}
          doc={user.longitude}
          phone={user.cell}
          email={user.email}
        />
      )) : ( <h1 className='text-gray-500 text-2xl dark:text-gray-300'>No hay nada por aquí...</h1> )
      }
      
    </div>
  );
};

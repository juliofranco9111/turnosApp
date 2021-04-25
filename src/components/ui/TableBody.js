import React from 'react';
import { PatientItem } from './PatientItem';
import { fakeUsers } from '../../helpers/fakeUsers';
export const TableBody = () => {
  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-3 bg-gray-50 dark:bg-gray-800 rounded-b p-3'>
      {fakeUsers.map((user) => (
        <PatientItem
          key={ user.cell }
          name={`${user.name.first} ${user.name.last}`}
          img={user.picture.medium}
          doc={user.longitude}
          phone={user.cell}
          email={user.email}
        />
      ))}
    </div>
  );
};

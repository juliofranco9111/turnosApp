import React, { useState } from 'react';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import { fakeUsers } from '../../helpers/fakeUsers';

export const PatientsTable = () => {
  const [users, setUsers] = useState(fakeUsers);

  const setUsersFn = (searchTerm) => {
    let newUsers = fakeUsers.filter(
      (user) =>
        user.name.first.toLowerCase().match(searchTerm.toLowerCase()) ||
        user.name.last.toLowerCase().match(searchTerm.toLowerCase())
    );

    //TODO: Search by document !!! 

    setUsers(newUsers);
  };

  return (
    <>
      <TableHead setUsers={setUsersFn} />
      <div className='mx-auto table__patients overflow-y-auto overflow-x-hidden'>
        <TableBody users={users} />
      </div>
    </>
  );
};

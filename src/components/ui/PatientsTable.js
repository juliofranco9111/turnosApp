import React, { useState } from 'react';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import { fakeUsers } from '../../helpers/fakeUsers';

export const PatientsTable = () => {
  const [list, setList] = useState(fakeUsers);

  const setUsersFn = (searchTerm) => {
    console.log(searchTerm);
    console.log(list);
    const userList = fakeUsers.filter((user) => {
      let stringName = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;

      if (stringName.match(searchTerm)) {
        return user;
      }
      return false;
    });

    //TODO: Search by document !!!
    setList(userList);
  };

  return (
    <>
      <TableHead setUsers={setUsersFn} />
      <div className='mx-auto table__patients overflow-y-auto overflow-x-hidden'>
        <TableBody users={list} />
      </div>
    </>
  );
};

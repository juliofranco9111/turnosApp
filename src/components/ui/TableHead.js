import React from 'react';
import { ButtonGeneral } from './ButtonGeneral';
import { SearchInput } from './SearchInput';

export const TableHead = () => {
  return (
    <div className='grid grid-cols-6 w-full mx-auto mt-3 py-4 bg-gray-100 rounded-t dark:bg-gray-800'>
      <div className='col-span-4 px-3'>
      <SearchInput />
      </div>
      <div className='col-span-2 px-6'>
      <ButtonGeneral title='Nuevo' bg='blue' />
      </div>
    </div>
  );
};

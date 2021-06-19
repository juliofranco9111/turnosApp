import React, { useEffect } from 'react';
import { ButtonGeneral } from './ButtonGeneral';
import { SearchInput } from './SearchInput';
import {useForm} from '../../hooks/useForm'

export const TableHead = ({setUsers }) => {
  const initialValues={
    term: ''
  }

  const [values, handleInputChange] = useForm(initialValues);

  useEffect(() => {
    setUsers(values.term);
   
  },[values.term])


  return (
    <div className='grid grid-cols-6 w-full mx-auto mt-3 py-4 rounded-t dark:bg-gray-800'>
      <div className='col-span-4'>
      <SearchInput value={values.term} fn={handleInputChange}/>
      </div>
      <div className='col-span-2'>
      <ButtonGeneral title='Nuevo' text='gray-50' bg='indigo' />
      </div>
    </div>
  );
};

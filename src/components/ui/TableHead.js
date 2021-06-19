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
    <div className='grid grid-cols-6 w-full mx-auto mt-3 py-4 bg-gray-100 rounded-t dark:bg-gray-800'>
      <div className='col-span-4 pl-3 xl:px-12'>
      <SearchInput value={values.term} fn={handleInputChange}/>
      </div>
      <div className='col-span-2 pr-3 xl:px-12'>
      <ButtonGeneral title='Nuevo' text='gray-50' bg='blue' />
      </div>
    </div>
  );
};

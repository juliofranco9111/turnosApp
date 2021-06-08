import React from 'react';
import { INPUT_CLASS } from '../../helpers/commonCss';

export const InputWithLabel = ({ 
  label = null,
  type,
  name,
  placeholder='',
  value,
  change }) => {
  return (
    <>
    {
      label && 

      <label className='block mb-2 ml-3 text-sm font-medium text-gray-500 dark:text-gray-500'>
        {label}
      </label>
    }

      <input
      onChange={ change }
        value={value}
        id={name}
        name={name}
        type={type}
        autoComplete='off'
        className={INPUT_CLASS}
        placeholder={placeholder}
      />
    </>
  );
};

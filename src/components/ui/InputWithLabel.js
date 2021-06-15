import React from 'react';
import { INPUT_CLASS } from '../../helpers/commonCss';

export const InputWithLabel = ({
  label = null,
  type,
  name,
  placeholder = '',
  value,
  change,
  svgPath = ''
}) => {
  return (
    <>
      {label && (
        <label className='block mb-2 ml-3 text-sm font-medium text-gray-500 dark:text-gray-500'>
          {label}
        </label>
      )}
      <div className='flex'>

        <div className='w-10/12'>
        <input
          onChange={change}
          value={value}
          id={name}
          name={name}
          type={type}
          autoComplete='off'
          className={INPUT_CLASS}
          placeholder={placeholder}
          />
        </div>
        <label className='h-8 w-8 mx-auto text-indigo-400 my-auto' for={`${ name }`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className=''
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1}
            d={`${svgPath}`}
            />
        </svg>
            </label>
      </div>
    </>
  );
};

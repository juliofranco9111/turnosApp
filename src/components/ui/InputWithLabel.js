import React from 'react';
import { INPUT_CLASS } from '../../helpers/commonCss';


export const InputWithLabel = ({
  label = null,
  type,
  name,
  placeholder = '',
  value,
  change,
  Icon,
  svgPath = '',
}) => { 
  
  console.log(Icon);

  

  return (
    <>
      {label && (
        <label className='block mb-2 ml-3 text-sm font-medium text-gray-500 dark:text-gray-500'>
          {label}
        </label>
      )}
      <div className='grid grid-cols-7'>
        <div className='col-span-6'>
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

        <div className='my-3 border-b border-indigo-500'>
          <label
            className='mx-auto text-indigo-400 my-auto'
            htmlFor={`${name}`}>
              <i className="fad fa-at"></i>
              <i className="fal fa-at"></i>
            <span></span>
          </label>
        </div>
      </div>
    </>
  );
};

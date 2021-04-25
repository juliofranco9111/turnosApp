import React from 'react';

export const SearchInput = () => {
  return (
    <div className='flex w-full'>
      <input
        type='search'
        className='bg-gray-200 w-full rounded border-0 outline-none dark:text-gray-50 p-2 dark:bg-gray-700 '
        placeholder='Buscar..'
      />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 relative mt-2 right-8 text-gray-500'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
    </div>
  );
};

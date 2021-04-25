import React from 'react';

export const PatientItem = () => {
  return (
    <div className='grid bg-transparent opacity-80 hover:opacity-100'>
      <div className=''>
        <div className='flex justify-center p-3'>
          <div className='h-20 w-20 mr-4'>
            <img
              className='rounded-full'
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
              alt='hola'
            />
          </div>
          <div className='text-left'>
            <div className='text-sm leading-5 font-medium text-gray-900 dark:text-gray-100'>
              Maria Gonzalez Zubizarreta
            </div>
            <div className='text-sm leading-5 text-gray-500 dark:text-gray-400'>
              c.c 38756275
            </div>
            <div className='text-sm leading-5 text-gray-500 dark:text-gray-400'>
              john@example.com
            </div>

            <div className='text-sm leading-5 font-medium text-gray-700 dark:text-gray-100'>
              317-268-0024
            </div>

            <div className='flex w-full space-x-3 text-gray-600 dark:text-gray-400 p-3'>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 hover:text-gray-800 dark:hover:text-gray-100'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

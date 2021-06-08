import React, { useState } from 'react';

export const MyAppointmentListItem = ({
  name = 'Franco Pizarro',
  specialty = 'Ginecobs',
  date,
  hour
}) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  
  return (
    <div className='grid grid-cols-12 my-5 bg-gray-50 rounded p-4 dark:bg-gray-900 '>
      <div className='col-span-6'>
        <h1 className='text-xs md:text-xl text-left text-gray-500 dark:text-gray-300'>
          <span className='font-bold text-gray-600 dark:text-gray-100'>
            
            { date }
          </span>
        </h1>
        <h1 className='text-xs md:text-xl text-left text-gray-500 dark:text-gray-300'>
            
            { hour }
        </h1>
        {showMore && (
          <>
            <h1 className='text-xs md:text-xl text-left text-gray-500 dark:text-gray-300'>
              Profesional:
              <span className='font-bold text-gray-600 dark:text-gray-100'>
                
                {name}
              </span>
            </h1>
            <h1 className='text-xs md:text-xl text-left text-gray-500 dark:text-gray-300'>
              Especialidad:
              <span className='font-bold text-gray-600 dark:text-gray-100'>
               
                {specialty}
              </span>
            </h1>
            <h1 className='text-xs md:text-xl text-left text-gray-500 dark:text-gray-300'>
              Status:
              <span className='font-bold text-gray-600 dark:text-gray-100'>
                {' Pendiente por confirmar'}
              </span>
            </h1>
          </>
        )}
      </div>
      <div className='col-span-4 w-10'>
      <span className='text-md text-gray-600 dark:text-gray-100'>
           Pendiente
          </span>
      </div>
      <div className='flex my-auto space-x-2'>
        <button
          className='text-gray-500 dark:text-gray-400'
          onClick={handleShowMore}>
          {!showMore ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 md:h-10 md:w-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 md:h-10 md:w-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
              />
            </svg>
          )}
        </button>
        <button className='text-gray-500 dark:text-gray-400'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 md:h-10 md:w-10'
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
  );
};

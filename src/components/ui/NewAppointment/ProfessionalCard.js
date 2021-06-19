import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfessionals } from '../../../actions/appointment';

export const ProfessionalCard = () => {

    const { appointment } = useSelector((state) => state);

  const { professional } = appointment;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);
    return (
        <>
            {professional && (
        <>
          <div className='p-2'>
            <img
              src={professional.img}
              className='h-24 mx-auto rounded'
              alt='profesional'
            />
          </div>
          <div className='text-center text-gray-600 dark:text-gray-200'>
            <h1 className='italic'>{professional.specialty}</h1>
            <h1 className='text-2xl font-medium'>{professional.name}</h1>
          </div>
        </>
      )}
      <div className='grid grid-cols-3 w-48 mx-auto gap-x-9 mt-5'>
        <a
          href={`https://wa.me/5491125592459`}
          className='h-auto w-10 p-2 text-indigo-600 text-center rounded dark:text-indigo-400'>
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
              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
            />
          </svg>
        </a>
        <a
          href={`tel:+5491125592459`}
          className='h-auto w-10 p-2 text-indigo-600 text-center rounded dark:text-indigo-400'>
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
              d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
            />
          </svg>
        </a>
        <a
          href={`mailto:julio.franco@gmail.com`}
          className='h-auto w-10 p-2 text-indigo-600 text-center rounded dark:text-indigo-400'>
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
              d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
            />
          </svg>
        </a>
      </div>
      <div className='md:w-9/12 mx-auto mt-3'>
        
        <p className='text-xs md:text-lg text-gray-600 text-center px-5 dark:text-gray-200'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
          obcaecati laudantium recusandae.
        </p>
        
      </div>
        </>
    )
}

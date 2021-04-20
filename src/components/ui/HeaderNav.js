import React from 'react';
import { useSelector } from 'react-redux';
import { setCapital } from '../../helpers/setCapitalizedString';

export const HeaderNav = () => {
  const { name } = useSelector((state) => state.auth);

  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container px-6 py-3 mx-auto'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex items-center justify-between'>
            <div className='flex md:hidden'>
              <button
                type='button'
                className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
                aria-label='toggle menu'>
                <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                  <path
                    fillRule='evenodd'
                    d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'></path>
                </svg>
              </button>
            </div>
          </div>

          <div className='flex-1 md:flex md:items-center md:justify-between'>
            <div className='flex flex-col -mx-4 md:flex-row md:items-center md:mx-8'></div>

            <div className='flex items-center mt-4 md:mt-0'>
              <button
                className='hidden mx-4 text-gray-600 md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none'
                aria-label='show notifications'>
                <svg
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>

              <button
                type='button'
                className='flex items-center focus:outline-none'
                aria-label='toggle profile dropdown'>
                <div className='w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full'>
                  <img
                    src='https://lh3.googleusercontent.com/a-/AOh14Gi0DgItGDTATTFV6lPiVrqtja6RZ_qrY91zg42o-g'
                    className='object-cover w-full h-full'
                    alt='avatar'
                  />
                </div>

                <h3 className='mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden'>
                  {name && setCapital(name)}
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

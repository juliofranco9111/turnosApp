import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const DropdownSidebar = ({ handleTheme, handleLogout }) => {
  const { theme } = useSelector((state) => state.ui);
  return (
    <div
      className='bg-gray-50 p-2 rounded shadow-lg outline-none dark:bg-gray-700 pr-6 sm:pr-0'
      role='menu'>
        <NavLink
          to='/perfil'
          className='flex items-center text-gray-500 my-2 cursor-pointer focus:outline-none focus:border-none pl-3 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-50'>
          <span className='w-8 h-8 p-1 mr-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
          </span>
          <span className='font-medium select-none'>Perfil</span>
        </NavLink>
        <button
          onClick={handleTheme}
          className='flex items-center text-gray-500 my-2 cursor-pointer focus:outline-none focus:border-none pl-3 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-50'>
          <span className='w-8 h-8 p-1 mr-4'>
            <svg
              xmlns='http://www.w3.org/3000/svg'
              className='h-5 w-5 mt-1 transition duration-500 ease-in-out'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              {theme === 'light' ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              )}
            </svg>
          </span>
          <span className='font-medium select-none'>Tema</span>
        </button>

        <button
          onClick={handleLogout}
          className='flex items-center text-gray-500  cursor-pointer focus:outline-none focus:border-none pl-3 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-50'>
          <span className='w-8 h-8 p-1 mr-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mt-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              />
            </svg>
          </span>
          <span className='font-medium select-none'>Salir</span>
        </button>
      </div>
  );
};

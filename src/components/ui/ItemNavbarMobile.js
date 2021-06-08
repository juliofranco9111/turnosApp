import React from 'react';
import { NavLink } from 'react-router-dom';

export const ItemNavbarMobile = ({ d = '', to = '' }) => {

  const active = 'text-indigo-600'

  return (
    <NavLink
      to={to} 
      activeClassName={active}
      className='
      text-indigo-400
      dark:text-indigo-400
      '>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-8 mx-auto items-center rounded-xl
        justify-center block text-sm font-semibold
        hover:text-indigo-500
         '
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d={d}
        />
      </svg>
    </NavLink>
  );
};

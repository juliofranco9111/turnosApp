import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { MenuAdmin, MenuUser } from '../../helpers/sidebarMenu';
import { ItemNavbarMobile } from './ItemNavbarMobile';

export const NavBarMobile = () => {
  const { role } = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const menu = role === 'PROFESSIONAL_ROLE' ? MenuAdmin : MenuUser;

  const toggleTheme = () => {
    const html = document.getElementById('toggle-theme');
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
  };

  const handleLogout = () => {
    dispatch(startLogout())
  }

  console.log(role);
  return (
    <div className='navbar__mobile md:hidden bg-gray-50 w-full dark:bg-gray-800 pb-1'>
      <nav>
        <ul className='flex justify-between'>
          {menu.map((item) => (
            <li className='w-full'>
              <ItemNavbarMobile key={item.name} d={item.d} to={item.path} />
            </li>
          ))}
          <li className='w-full'>
            <button
            onClick={ toggleTheme }
            
            className='w-full h-full flex-shrink-0 flex flex-row items-center
            justify-center block text-sm font-semibold text-gray-600
            hover:text-gray-800 hover:bg-gray-200 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline
            dark:text-gray-400 dark:hover:bg-gray-700
            dark:hover:text-gray-200 dark:focus:bg-gray-700 
            dark:focus:text-gray-200'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
              </svg>
            </button>
          </li>
          <li className='w-full'>
            <button
            onClick={ handleLogout }
            
            className='w-full h-full flex-shrink-0 flex flex-row items-center
            justify-center block text-sm font-semibold text-gray-600
            hover:text-gray-800 hover:bg-gray-200 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline
            dark:text-gray-400 dark:hover:bg-gray-700
            dark:hover:text-gray-200 dark:focus:bg-gray-700 
            dark:focus:text-gray-200'>
              <svg
                xmlns='http://www.w3.org/3000/svg'
                className='h-6 w-6'
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
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

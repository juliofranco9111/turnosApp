import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { ItemNavbarMobile } from './ItemNavbarMobile';
import { getMenu } from '../../helpers/sidebarMenu';

export const NavBarMobile = () => {
  const { role, img } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  
  const [menu, setMenu] = useState([])
 
  
  useEffect(() => {
   setMenu(getMenu(role))
 }, [ role ])  

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

  return (
    <div className='navbar__mobile md:hidden bg-gray-50 w-full dark:bg-gray-800 pb-1'>
      <nav>
        <ul className='flex justify-between'>
          {menu && menu.length !== 0 && menu.map((item) => (
            <li key={item.name} className='w-full'>
              <ItemNavbarMobile d={item.d} to={item.path} />
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
              
              <img src={img} alt="" className='w-9 rounded-full' />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

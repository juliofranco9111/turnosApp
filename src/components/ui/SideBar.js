import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { MenuAdmin, MenuUser, classActive } from '../../helpers/sidebarMenu';

export const SideBar = () => {
  const { role } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [menu, setMenu] = useState(MenuUser)

  const toggleTheme = () => {
    const html = document.getElementById('toggle-theme');
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
  };


useEffect(() => {
  setMenu(role === 'PROFESSIONAL_ROLE' ? MenuAdmin : MenuUser)
  
}, [role])

  
  const handleLogout = () => {
    dispatch(startLogout())
  }


  return (
    <aside className='hidden fixed md:flex flex-col h-screen justify-between bg-white dark:bg-gray-800 shadow p-6'>
      <nav className='inline-flex flex-col space-y-2'>
        {menu && menu.map((item) => {
          return (
            <NavLink
              key={item.name}
              activeClassName={classActive}
              to={item.path}
              className='flex items-center text-gray-600 py-2 cursor-pointer pl-2 pr-6 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700'>
              <span className='w-8 h-8 p-1 mr-4'>{item.svg}</span>
              <span className='font-medium select-none'>{item.name}</span>
            </NavLink>
          );
        })}

        <button
          onClick={toggleTheme}
          className='flex items-center text-gray-600 py-2 cursor-pointer hover:bg-gray-100 pl-2 pr-6 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700'>
          <span className='w-8 h-8 p-1 mr-4'>
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
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
            </svg>
          </span>
          <span className='font-medium select-none'>Tema</span>
        </button>
      </nav>
        <div>
          
      <NavLink to='/perfil'>
        <img
          className='mx-auto w-20 rounded-full align-bottom select-none'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetGpe6zBMFfl_TbPQo5FHJKJtLHLjiJHXZA&usqp=CAU'
          alt='avatar'
          />
      </NavLink>
      <button 
      onClick={ handleLogout }
      className='flex items-center text-gray-600 py-2 cursor-pointer hover:bg-gray-100 pl-2 pr-6 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700'>
            <span className='w-8 h-8 p-1 mr-4'>
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
            </span>
            <span className='font-medium select-none'>Salir</span>
          </button>
          </div>
    </aside>
  );
};

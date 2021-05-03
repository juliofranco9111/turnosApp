import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { setTheme } from '../../actions/ui';
import { classActive, getMenu } from '../../helpers/sidebarMenu';
import { DropdownSidebar } from './DropdownSidebar';

export const SideBar = () => {
  const dispatch = useDispatch();
  const { role, img, name } = useSelector((state) => state.user);

  const [menu, setMenu] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setMenu(getMenu(role));
  }, [role]);

  const handleUserTheme = () => {
    dispatch(setTheme());
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <aside className='hidden fixed md:flex flex-col h-screen justify-between bg-white shadow  dark:bg-gray-800'>
      <nav className='inline-flex flex-col space-y-2 p-6'>
        {menu &&
          menu.length !== 0 &&
          menu.map((item) => {
            return (
              <NavLink
                key={item.name}
                activeClassName={classActive}
                to={item.path}
                className='flex items-center text-gray-400 py-2 cursor-pointer pl-2 pr-6 rounded hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-50'>
                <span className='w-8 h-8 p-1 mr-4'>{item.svg}</span>
                <span className='font-medium select-none'>{item.name}</span>
              </NavLink>
            );
          })}

        <button
          onClick={handleDropdown}
          className='flex items-center text-gray-600 border-t-2 pt-3 outline-none focus:outline-none cursor-pointer pl-2 pr-6 dark:text-gray-300 dark:hover:text-gray-50'>
          <span className='w-8 h-8 p-1 mr-4'>
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
                d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          </span>
          <span className='font-medium select-none'>Ajustes</span>
        </button>

        {showDropdown && (
          <DropdownSidebar
            handleTheme={handleUserTheme}
            handleLogout={handleLogout}
          />
        )}
      </nav>

      <div className='mb-6'>
        <NavLink to='/perfil'>
          <img
            className='mx-auto my-2 w-20 rounded-full align-bottom select-none'
            src={img}
            alt='avatar'
          />
        </NavLink>
        <div className='w-full'>
          <h1 className='text-center text-xl font-medium text-gray-600 dark:text-gray-300'>
            {name}
          </h1>
        </div>
      </div>
    </aside>
  );
};

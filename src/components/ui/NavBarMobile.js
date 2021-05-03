import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { ItemNavbarMobile } from './ItemNavbarMobile';
import { getMenu } from '../../helpers/sidebarMenu';
import { DropdownSidebar } from './DropdownSidebar';
import { setTheme } from '../../actions/ui';

export const NavBarMobile = () => {
  const { role, img } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(getMenu(role));
  }, [role]);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleTheme = () => {
    dispatch(setTheme());
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className='navbar__mobile md:hidden bg-gray-50 w-full dark:bg-gray-800 pb-1'>
      <nav>
        <ul className='flex justify-between'>
          {menu &&
            menu.length !== 0 &&
            menu.map((item) => (
              <li key={item.name} className='w-full'>
                <ItemNavbarMobile d={item.d} to={item.path} />
              </li>
            ))}

          <li className='w-full'>
            <button
              onClick={handleDropdown}
              className='w-full h-full flex-shrink-0 flex flex-row items-center
            justify-center block text-sm font-semibold text-gray-600
            hover:text-gray-800 hover:bg-gray-200 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline
            dark:text-gray-400 dark:hover:bg-gray-700
            dark:hover:text-gray-200 dark:focus:bg-gray-700 
            dark:focus:text-gray-200'>
              <img src={img} alt='' className='w-9 rounded-full' />
            </button>
          </li>
        </ul>
        <div className='absolute w-auto bottom-16 right-2'>
          {
            showDropdown &&
            <DropdownSidebar
            handleTheme={handleTheme}
            handleLogout={handleLogout}
            />
          }
        </div>
      </nav>
    </div>
  );
};

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { ItemNavbarMobile } from './ItemNavbarMobile';
import { DropdownSidebar } from './DropdownSidebar';
import { setTheme } from '../../actions/ui';

export const NavBarMobile = () => {
  const { img } = useSelector((state) => state.user);
  const { menu } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

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
    <div className='md:hidden '>
      <nav
        className='fixed bg-white bottom-3 navbar__mobile border border-gray-100 rounded-xl shadow
    dark:bg-gray-800
    dark:border-gray-500'>
        <ul className={`grid grid-cols-${menu.length + 1} pt-2`}>
          {menu &&
            menu.length !== 0 &&
            menu.map((item) => (
              <li key={item.name} className='w-full'>
                <ItemNavbarMobile d={item.d} to={item.path} />
              </li>
            ))}

          <li className='w-full'>
            {/* {span && (
              <span className='absolute w-2 h-2 rounded-full right-30 text-red-100 bg-red-500'></span>
            )} */}

            <button
              onClick={handleDropdown}
              className='w-8 mx-4 outline-none focus:outline-none rounded-full'>
              <img src={img} alt='' className='rounded-xl mx-auto' />
            </button>
          </li>
        </ul>
        <div className='absolute w-auto bottom-16 right-1'>
          {showDropdown && (
            <DropdownSidebar
              handleTheme={handleTheme}
              handleLogout={handleLogout}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

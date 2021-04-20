import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export const SideBar = () => {

  const [showMenu, setShowMenu] = useState(false)

  const classActive = 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-300'

  const toggleTheme = () => {
    const html = document.getElementById('toggle-theme')

    if( html.classList.contains('dark') ){
      html.classList.remove('dark')
    }else{
      html.classList.add('dark')
    }
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <aside className="hidden md:block relative h-screen inline-flex flex-col justify-between items-center bg-white dark:bg-gray-800 shadow p-6">
      <nav className=" inline-flex flex-col space-y-2">
        <Link to="none" className="flex items-center text-gray-600 py-2 cursor-pointer pl-2 pr-6 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700">
          <span className="w-8 h-8 p-1 mr-4">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
          </span>
          <span className="font-medium select-none">Dashboard</span>
        </Link>
        <Link to="none" className="flex items-center text-gray-600 py-2 cursor-pointer hover:bg-gray-100 pl-2 pr-6 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700">
          <span className="w-8 h-8 p-1 mr-4">
            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </span>
          <span className="font-medium select-none">Perfil</span>
        </Link>
        <Link to="none" className="flex items-center text-gray-600 py-2 cursor-pointer hover:bg-gray-100 pl-2 pr-6 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700">
          <span className="w-8 h-8 p-1 mr-4">
            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </span>
          <span className="font-medium select-none">Pendientes</span>
        </Link>
        <Link to="none" className="flex items-center text-gray-600 py-2 cursor-pointer hover:bg-gray-100 pl-2 pr-6 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700">
          <span className="w-8 h-8 p-1 mr-4">
            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
            </svg>
          </span>
          <span className="font-medium select-none">Pacientes</span>
        </Link>
        <Link to="none" className="flex items-center text-gray-600 py-2 cursor-pointer hover:bg-gray-100 pl-2 pr-6 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700">
          <span className="w-8 h-8 p-1 mr-4">
            <svg xmlns="http://www.w3.org/3000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </span>
          <span className="font-medium select-none">Logout</span>
        </Link>
        <button onClick={ toggleTheme } className="flex items-center text-gray-600 py-2 cursor-pointer hover:bg-gray-100 pl-2 pr-6 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700">
          <span className="w-8 h-8 p-1 mr-4">
            <svg xmlns="http://www.w3.org/3000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </span>
          <span className="font-medium select-none">Dark</span>
        </button>
      </nav>





    </aside>

  );
};

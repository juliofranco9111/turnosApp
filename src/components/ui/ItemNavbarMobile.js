import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbarMobile = ({ d = '', to = '' }) => {
    return (
              <NavLink
                to={ to }
                className='w-full h-full flex-shrink-0 flex flex-row items-center
                justify-center block text-sm font-semibold text-gray-600
                hover:text-gray-800 hover:bg-gray-200 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline
                dark:text-gray-400 dark:hover:bg-gray-700
                dark:hover:text-gray-200 dark:focus:bg-gray-700 
                dark:focus:text-gray-200
                '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d={ d } 
                  />
                </svg>
              </NavLink>
    )
}

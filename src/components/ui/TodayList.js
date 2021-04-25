import React from 'react'

export const TodayList = () => {
    return (
        <div className='shadow-lg bg-white dark:bg-gray-800 w-full rounded m-4 h-auto max-h-screen'>
        <p className='font-bold text-md p-4 text-gray-700 dark:text-gray-100'>
        Turnos pendientes para hoy
          <span className='text-sm text-gray-600 dark:text-gray-300 dark:text-white ml-2'>
            (03)
          </span>
        </p>
        <ul>
          <li className='flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800'>
            <div className='flex items-center justify-start text-sm'>
              <span className='mx-4'>01</span>
              <span>Loco Montenegro</span>
            </div>
            <div className='pr-8'>
                08:00 am
            </div>
          </li>
          
          <li className='flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800'>
            <div className='flex items-center justify-start text-sm'>
              <span className='mx-4'>02</span>
              <span>La Chepi</span>
            </div>
            <div className='pr-8'>
                09:00 am
            </div>
          </li>
          
          <li className='flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800'>
            <div className='flex items-center justify-start text-sm'>
              <span className='mx-4'>01</span>
              <span>La bunda</span>
            </div>
            <div className='pr-8'>
                02:00 pm
            </div>
          </li>

          <li className='flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800'>
            <div className='flex items-center justify-start text-sm'>
              <span className='mx-4'>01</span>
              <span>La bunda</span>
            </div>
            <div className='pr-8'>
                02:00 pm
            </div>
          </li>

          <li className='flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800'>
            <div className='flex items-center justify-start text-sm'>
              <span className='mx-4'>01</span>
              <span>La bunda</span>
            </div>
            <div className='pr-8'>
                02:00 pm
            </div>
          </li>
          
        </ul>
      </div>
    )
}

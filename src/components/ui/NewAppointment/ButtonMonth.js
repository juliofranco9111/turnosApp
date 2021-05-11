import React from 'react'
import { useSelector } from 'react-redux'
import { MONTHS } from '../../../helpers/datePickerLocale'

export const ButtonMonth = ({ toggleList }) => {
  const {month: currentMonth} = useSelector(state => state.appointment.date)
    return (
        <>
        <button
              onClick={toggleList}
              className='my-2 mx-auto w-full md:w-4/5 p-2 bg-gray-50 flex border outline-none focus:outline-none border-indigo-200 rounded cursor-pointer dark:bg-gray-800 dark:border-indigo-900 dark:text-gray-200'>
              <div className='mx-auto'>{MONTHS[currentMonth]}</div>

              <div className='text-gray-300 w-8 pl-2 flex items-center'>
                <div className='cursor-pointer w-6 h-6 text-indigo-600 outline-none focus:outline-none dark:text-indigo-400'>
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
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </div>
              </div>
            </button>
            
        </>
    )
}

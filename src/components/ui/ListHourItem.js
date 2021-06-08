import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../../actions/appointment';

export const ListHourItem = ({ hour: hourProp }) => {
  const { hour } = useSelector(
    (state) => state.appointment.date
  );
  const dispatch = useDispatch();

  const handleHour = () => {
    dispatch(setDate({ hour: parseInt(hourProp) }));
    
  };

  return (
    <button
      onClick={handleHour}
      className={`select-none cursor-pointer border border-indigo-100 bg-gray-50 outline-none focus:outline-none hover:bg-gray-100 
    rounded-md flex flex-1 items-center p-2
    dark:bg-gray-800 dark:border-gray-300 dark:focus:bg-indigo-500 ${
      parseInt(hourProp) === hour && 'border-indigo-500'
    }`}>
      <div
        className={`font-medium text-center text-gray-500 dark:text-gray-200 ${
          parseInt(hourProp) === hour && 'text-indigo-500'
        }`}>
        {hourProp}
        <span className='text-gray-400'>:00</span>
      </div>
    </button>
  );
};

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../../../actions/appointment';
import { WEEKDAYS_SHORT } from '../../../helpers/datePickerLocale';
import { daysInMonth } from '../../../helpers/daysInMonth';
import { ListHour } from '../ListHour';

export const WeekDays = () => {
  const dispatch = useDispatch()
  const {year, month} = useSelector(state => state.appointment.date)
  const today = new Date().getDate();
  const todayMonth = new Date().getMonth();
  const days = daysInMonth(year, month);

  
 
  const [daySelected, setDaySelected] = useState( month === todayMonth ? today : 1);

  
  const handleClick = (day) => {
    
    dispatch(setDate({day}))
    setDaySelected(day)
  };

  return (
        
      <div
       className='grid grid-flow-col grid-rows-1 col-span-2 w-full mt-6 mx-auto h-auto'>

        <div className='grid grid-cols-6'>
          {month === todayMonth
            ? days.map(
                (day) =>
                  day >= today &&
                  new Date(year, month, day).getDay() !== 0 && (
                    <button
                      onClick={() => handleClick(day)}
                      key={day}
                      className={`w-auto h-auto text-center p-2 dark:text-gray-400 outline-none focus:outline-none col-start-${new Date(
                        year,
                        month,
                        day
                      ).getDay()}`}>
                      <p className={ daySelected === day ? 'text-indigo-500 font-bold dark:text-indigo-500 border rounded-full': 'dark:text-gray-300'}>{day}</p>
                      <p className='text-gray-500'>
                        {
                          WEEKDAYS_SHORT[
                            new Date(year, month, day).getDay()
                          ]
                        }
                      </p>
                    </button>
                  )
              )
            : days.map(
                (day) =>
                  new Date(year, month, day).getDay() !== 0 && (
                    <button
                      onClick={() => handleClick(day)}
                      key={day}
                      className={`w-auto h-auto text-center outline-none focus:outline-none p-2 col-start-${new Date(
                        year,
                        month,
                        day
                      ).getDay()}`}>
                      <p className={ daySelected === day ? 'text-indigo-500 font-bold dark:text-indigo-500' : 'dark:text-gray-300'}>{day}</p>
                      <p className='text-gray-500 dark:text-gray-500'>
                        {
                          WEEKDAYS_SHORT[
                            new Date(year, month, day).getDay()
                          ]
                        }
                      </p>
                    </button>
                  )
              )}
        </div>
      </div>
      
        
     
  );
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../../../actions/appointment';
import { showDaysList } from '../../../actions/ui';
import { WEEKDAYS_SHORT, MONTHS } from '../../../helpers/datePickerLocale';
import { daysInMonth } from '../../../helpers/daysInMonth';

export const WeekDays = () => {
  const dispatch = useDispatch()
  const {year, month, day} = useSelector(state => state.appointment.date)
  const { listDays } = useSelector(state => state.ui)
  const today = new Date().getDate();
  const todayMonth = new Date().getMonth();
  const days = daysInMonth(year, month);

  const handleClick = (day) => {
    dispatch(setDate({day}))
    dispatch(showDaysList(listDays));
  };

  return (
        
      <>
         <h1 className='font-bold text-2xl text-center mb-3 dark:text-gray-200'>{MONTHS[month]}</h1>

        <div className='grid grid-cols-6'>
          {month === todayMonth
            ? days.map(
                (dayRes) =>
                dayRes >= today &&
                  new Date(year, month, dayRes).getDay() !== 0 && (
                    <button
                      onClick={() => handleClick(dayRes)}
                      key={dayRes}
                      className={`w-auto h-16 text-center dark:text-gray-400 outline-none focus:outline-none col-start-${new Date(
                        year,
                        month,
                        dayRes
                      ).getDay()}`}>
                      <span className={ day === dayRes ? 'font-bold bg-indigo-500 rounded text-gray-50 p-1': 'dark:text-gray-300'}>{dayRes}</span>
                      <p className='text-gray-500'>
                        {
                          WEEKDAYS_SHORT[
                            new Date(year, month, dayRes).getDay()
                          ]
                        }
                      </p>
                    </button>
                  )
              )
            : days.map(
                (dayRes,i) =>
                  new Date(year, month, dayRes).getDay() !== 0 && (
                    <button
                      onClick={() => handleClick(dayRes)}
                      key={dayRes}
                      className={`w-auto h-auto text-center outline-none focus:outline-none p-2 col-start-${new Date(
                        year,
                        month,
                        dayRes
                      ).getDay()}`}>
                        {
                          dayRes === i ?
                          <p className={ 'text-gray-800 font-bold dark:text-gray-500'}>{dayRes}</p> :
                      <p className={ 'text-gray-500 font-bold dark:text-gray-500'}>{dayRes}</p>
                        }
                      <p className='text-gray-400 dark:text-gray-500'>
                        {
                          WEEKDAYS_SHORT[
                            new Date(year, month, dayRes).getDay()
                          ]
                        }
                      </p>
                    </button>
                  )
              )}
        </div>
      </>
      
        
     
  );
};

import React, { useEffect, useState } from 'react';
import { NewCalendarDay } from './NewCalendarDay';
import {
  MONTHS,
  MONTHS_DAYS,
  WEEKDAYS_LONG,
} from '../../helpers/datePickerLocale';
import { useDispatch, useSelector } from 'react-redux';
import { changeMonth } from '../../actions/calendar';
import { getPendingListMonth, setListDays } from '../../actions/appointment';
import { Loading } from '../ui/Loading';

export const NewCalendar = () => {
  const { month } = useSelector((state) => state.calendar);
  const { appointmentDayList, appointmentMonthList, loading } = useSelector(
    (state) => state.appointment
  );
  const { data } = appointmentMonthList;
  const dispatch = useDispatch();
  //const todayMonth = new Date().getMonth();
  const year = new Date().getFullYear();
  const daysByMonth = (month) => {
    let days = [];
    for (let i = 1; i <= MONTHS_DAYS[month]; i++) {
      days.push(i);
    }
    return days;
  };

  const [daysInCalendar, setDaysInCalendar] = useState(daysByMonth(month));

  useEffect(() => {
    console.log(month);
    setDaysInCalendar(daysByMonth(month));
    dispatch(getPendingListMonth(month));
  }, [month, dispatch]);

  const start = new Date(year, month, 1).getDay();

  useEffect(() => {
    setDaysInCalendar(daysByMonth(month));
  }, [month]);

  const subsMonth = () => {
    dispatch(changeMonth(month - 1));
  };

  const addMonth = () => {
    dispatch(changeMonth(month + 1));
  };

  useEffect(() => {
    if (data.length > 0) {
      console.log(data);
      const mapped = data.map((item) => new Date(item.start).getDate());

      const result = mapped.reduce((acc, item) => {
        if (!acc.includes(item)) {
          acc.push(item);
        }
        return acc;
      }, []);
      dispatch(setListDays(result));
    } else {
      dispatch(setListDays([]));
    }
  }, [data]);

  const hasAppointment = (day) => {
    if (appointmentDayList.includes(day)) {
      return true;
    }
  };

  return (
    <div className='w-full h-auto dark:bg-gray-800 p-3 dark:text-gray-100'>
      {!loading ? (
        <>
          <div className='grid grid-cols-3 ml-3 pt-3 w-full mx-auto justify-center p-4'>
              <button
                disabled={month < 1}
                onClick={subsMonth}
                className='rounded mx-auto col w-12 h-12 m-2 hover:text-indigo-700 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 mx-auto'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </button>
            <div className='text-2xl text-center font-bold self-center'>
              <h1>{MONTHS[month]} ({data.length})</h1>
            </div>
            <button
              disabled={month >= 11}
              onClick={addMonth}
              className='rounded mx-auto w-12 h-12 m-2 hover:text-indigo-700 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 mx-auto'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
          <div className='grid grid-cols-7 gap-2 bg-gray-100 rounded h-auto w-full mx-auto 2xl:w-3/4 animate__animated animated__fadeIn dark:bg-transparent dark:text-gray-500'>
            {WEEKDAYS_LONG.map((day) => (
              <div
                key={day}
                className={`text-center h-8 rounded-t ${
                  day === 'Lunes' && 'col-start-1'
                }`}>
                {day.slice(0, 1)}
              </div>
            ))}
          </div>

          <div className='grid grid-cols-7 gap-2 grid-rows-7 h-auto w-full mt-2 mx-auto 2xl:w-3/4 animate__animated animated__fadeIn'>
            {daysInCalendar &&
              daysInCalendar.map((day) => (
                <NewCalendarDay
                  key={`${day}day`}
                  day={day}
                  month={month}
                  hasAppointment={hasAppointment(day)}
                  start={start}
                />
              ))}
          </div>
        </>
      ) : <Loading />}
    </div>
  );
};

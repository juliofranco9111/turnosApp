import React from 'react';
import { useSelector } from 'react-redux';
import { MONTHS } from '../../helpers/datePickerLocale';
import { MyAppointmentListItem } from './MyAppointmentListItem';

export const MyAppointmentsList = () => {
  const { appointmentsList, professional } = useSelector(
    (state) => state.appointment
  );

  const { data, loading } = appointmentsList;
  const { name, specialty } = professional;

  console.log(data);

  const buildDate = (start, showHour = false) => {
    const date = new Date(start);

    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();

    if (!showHour) {
      return `${MONTHS[month]} ${day}`;
    } else {
      return `${hour}:00 hs`;
    }
  };

  return (
    <div className='my-6 rounded text-center w-full pr-2'>
      {loading && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 animate-spin mx-auto align-middle animate__animated animated__fadeIn'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
          />
        </svg>
      )}

      {!loading && data.length === 0 && (
        <>
          <h1 className='font-bold text-center text-gray-600 dark:text-gray-200 animate__animated animated__fadeIn'>
            No se encontraron turnos
          </h1>
        </>
      )}

      {!loading &&
        data.length > 0 &&
        data.map((appointment) => (
          <MyAppointmentListItem
            key={appointment.start}
            name={name}
            specialty={specialty}
            date={buildDate(appointment.start)}
            hour={buildDate(appointment.start, true)}
          />
        ))}
    </div>
  );
};

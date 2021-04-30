import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

const localizer = momentLocalizer(moment);

const msgs = {
  next: (
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
        d='M9 5l7 7-7 7'
      />
    </svg>
  ),
  previous: (
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
        d='M15 19l-7-7 7-7'
      />
    </svg>
  ),
  today: 'Hoy',
  month: 'Mes',
  week: 'Semana',
  day: 'Día',
};



export const CalendarComponent = ({ events }) => {
    return (
        
        <Calendar
          localizer={localizer}
          startAccessor='start'
          endAccessor='end'
          titleAccessor='professional'
          events={events}
          views={['month', 'week', 'day']}
          step={30}
          style={{ height: '800px', borderRadius: '10px', overflow: 'hidden' }}
          messages={msgs}
        />
    
    )
}

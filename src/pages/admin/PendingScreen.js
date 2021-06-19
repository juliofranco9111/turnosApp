import React from 'react';
import { NewCalendar } from '../../components/newCalendar/NewCalendar';
/* import { CalendarComponent } from '../components/calendar/CalendarComponent';
import { events } from '../helpers/events'; */

export const PendingScreen = () => {
  return (
    <div className='max-h-screen w-full bg-gray-50 lg:w-3/4 mx-auto'>
      {/* <CalendarComponent events={events} /> */}
      <NewCalendar />
    </div>
  );
};

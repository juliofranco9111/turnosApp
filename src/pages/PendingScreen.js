import React from 'react';
import { CalendarComponent } from '../components/calendar/CalendarComponent';
import { events } from '../helpers/events';

export const PendingScreen = () => {
  return (
    <div className='max-h-screen w-full p-2'>
      <CalendarComponent events={events} />
    </div>
  );
};

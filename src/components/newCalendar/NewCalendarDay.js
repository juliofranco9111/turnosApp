import React from 'react';


export const NewCalendarDay = ({ day = 1, month=new Date().getMonth(), start = 1, hasAppointment=false }) => {

  const isSunday = (day) => {
    const date = new Date()   
    const year = date.getFullYear();

    if(new Date( year, month, day ).getDay() === 0){
      return true
    }else{
      return false
    }
  }

  return (
    <div
      className={`opacity-50 day__calendar cursor-pointer h-11 md:h-28 p-2 text-center
       border-b-2 border-indigo-400 text-gray-700 bg-transparent
       hover:opacity-100
       hover:bg-indigo-50 transition duration-500
        ease
        dark:hover:bg-gray-900
        dark:text-gray-400
        ${ isSunday(day) && 'text-red-400 dark:text-red-400' }
        ${ day === 1 && `col-start-${start}`}`}>
      <div className={`row lg:p-2 mx-auto text-center`}>{day}</div>
      {
        hasAppointment &&
        <>
        <div className='event bg-indigo-400 text-indigo-400 w-2 h-2 rounded-full text-sm mb-1'></div>
        </>
      }
    </div>
  );
};

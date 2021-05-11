import React 
//{ useEffect, useState }
 from 'react';
import { useSelector } from 'react-redux';
import { ListHourItem } from './ListHourItem';

export const ListHour = () => {

  const { day, month, year } = useSelector(state => state.appointment);
console.log(new Date(year,month, day).getDay())
console.log(year,month,day)
  const isSaturday = ( year, month, day ) => {
    if (new Date(year,month, day).getDay() === 6) {
      return ['09', '10', '11', '12'];
      
    }else{
      return ['09', '10', '11', '12', '13', '14', '15', '16', '17'];
    }   
  };

  

  return (
    <ul className='grid grid-cols-2 mt-5 sm:grid-cols-3 md:grid-cols-2 md:grid-rows-auto md:w-4/5 mx-auto'>
      {isSaturday(day, month, year).map((hour) => (
        <li key={hour} className='flex flex-row p-2 mb-2 text-center animate__animated animate__fadeIn'>
          <ListHourItem hour={hour} />
        </li>
      ))}
    </ul>
  );
};

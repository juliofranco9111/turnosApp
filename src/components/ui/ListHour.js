import React 
, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startVerifyDate } from '../../actions/appointment';
import { ListHourItem } from './ListHourItem';

export const ListHour = () => {
  const hourSaturday = ['09', '10', '11', '12'];
  const hoursWeek = ['09', '10', '11', '12', '13', '14', '15', '16', '17'];
  const { day, month, year, hour } = useSelector(state => state.appointment.date);
  const [hours, setHours] = useState(hoursWeek);
  const dispatch = useDispatch();

  const dayOfWeek = new Date(year, month, day).getDay()

  useEffect(() => {
    if( dayOfWeek  === 6 ){
      setHours(hourSaturday);
    }else{
      setHours(hoursWeek);
    }
  }, []);

  useEffect(() => {
    dispatch(startVerifyDate({ start: new Date(year,month,day,hour).getTime() }))
  }, [hour])





  return (
    <ul className='grid grid-cols-3 mt-5 sm:grid-cols-3 md:grid-cols-2 md:grid-rows-auto md:w-4/5 mx-auto'>
      {hours.map((hour) => (
        <li key={hour} className='flex flex-row p-2 mb-2 text-center animate__animated animate__fadeIn'>
          <ListHourItem hour={hour} />
        </li>
      ))}
    </ul>
  );
};

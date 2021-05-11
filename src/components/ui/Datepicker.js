import React, { useEffect, useState } from 'react';
import DayPicker from 'react-day-picker';
import { ListHour } from './ListHour';
import { Alert } from './Alert';

import {
  MONTHS,
  WEEKDAYS_LONG,
  WEEKDAYS_SHORT,
} from '../../helpers/datePickerLocale';
import { useDispatch, useSelector } from 'react-redux';
import {
  startVerifyDate,
  clearVerify,
  getProfessionals,
  clearSelectedDay,
} from '../../actions/appointment';

export const Datepicker = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState({
    day: null,
    month: null,
    year: null,
    start: null,
    end: null,
  });

  const { day, month, year, start, end } = date;

  useEffect(() => {
    if (start & end) {
      console.log('se disparó');
      dispatch(startVerifyDate({ start, end }));
    } else {
      return;
    }
  }, [dispatch, end, start]);

  const { verify } = useSelector((state) => state.appointment);
  const { loading, msg, ok } = verify;

  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);

  const handleDayClick = (selectedDay, { selected, disabled }) => {
    if (disabled) {
      return;
    }
    if (selected) {
      // Unselect the day if already selected
      return;
    }

    if (selectedDay.getTime() > new Date().getTime()) {
      dispatch(clearSelectedDay());
      dispatch(clearVerify());
      setDate({
        day: selectedDay.getDate(),
        month: selectedDay.getMonth(),
        year: selectedDay.getFullYear(),
        start: null,
        end: null,
      });
    } else {
      return;
    }
  };

  const setHour = (hour) => {
    const startDate = new Date(year, month, day, parseInt(hour), 0);
    const endDate = new Date(year, month, day, parseInt(hour) + 1, 0);
    setDate({ ...date, start: startDate, end: endDate });
  };

  return (
    
      <div className='w-full grid md:grid-cols-2 gap-2'>
        <DayPicker
          months={MONTHS}
          weekdaysLong={WEEKDAYS_LONG}
          weekdaysShort={WEEKDAYS_SHORT}
          onDayClick={handleDayClick}
          firstDayOfWeek={1}
          disabledDays={{ daysOfWeek: [0] }}
          selectedDays={new Date(year, month, day)}
        />

        <div className='block w-11/12 mx-auto'>
          {loading && msg && (
            <Alert type='info' text='Comprobando...' loading={true} />
          )}
          {ok && msg && <Alert type='success' loading={false} text={msg} />}

          {!ok && msg && <Alert type='danger' loading={false} text={msg} />}
        </div>

        <div id='container__hour' className='grid px-3 mx-auto w-full'>
          <ListHour date={day} fn={setHour} />
        </div>
      </div>

  );
};

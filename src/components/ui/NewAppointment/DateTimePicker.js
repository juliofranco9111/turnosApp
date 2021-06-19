import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showDaysList, showHoursList, showList } from '../../../actions/ui';
import { MONTHS } from '../../../helpers/datePickerLocale';
import { ModalMonths } from './Modal';
import { ModalDatePicker } from './ModalDatePicker';
import { ButtonMonth } from './ButtonMonth';
import { ModalTimePicker } from './ModalTimePicker';

export const DateTimePicker = () => {
  const { list, listDays, listHour } = useSelector((state) => state.ui);
  const { month, day, hour } = useSelector((state) => state.appointment.date);
  const dispatch = useDispatch();

  const [, setCurrentMonth] = useState(month);

  useEffect(() => {
    setCurrentMonth(month);
  }, [month]);

  const toggleList = () => {
    dispatch(showList(list));
  };
  const toggleListDays = () => {
    dispatch(showDaysList(listDays));
  };

  const toggleListHours = () => {
    dispatch(showHoursList(listHour));
  };

  return (
    <>
      <div className='mx-auto text-center rounded mt-5 grid grid-cols-3 grid-rows-2 gap-2 md:gap-0'>
        <div className='text-xl text-center'>Dia:</div>
        <div className='text-xl text-center'>Mes:</div>
        <div className='text-xl text-center'>Hora:</div>
        <ButtonMonth fn={toggleListDays} msg={day} />
        <ButtonMonth fn={toggleList} msg={MONTHS[month]} />
        <ButtonMonth fn={toggleListHours} msg={`${hour}:00`} />

        {list && (
          <div className='relative p-4 items-center w-full'>
            <ModalMonths show={list} />
          </div>
        )}
        {listDays && (
          <div className='relative p-4 bg-white items-center w-full'>
            <ModalDatePicker show={listDays} />
          </div>
        )}
        {listHour && (
          <div className='relative p-4 bg-white items-center w-full'>
            <ModalTimePicker show={listHour} />
          </div>
        )}
      </div>
    </>
  );
};

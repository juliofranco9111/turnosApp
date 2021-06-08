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

  const [currentMonth, setCurrentMonth] = useState(month);


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
      <div className='mx-auto mt-4'>
        <div className='mx-auto text-center rounded grid grid-cols-3 gap-1 justify-center'>
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
      </div>
  
    </>
  );
};

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showList } from '../../../actions/ui';
import { Alert } from '../Alert';
import { ButtonGeneral } from '../ButtonGeneral';
import { ListHour } from '../ListHour';
import { ModalMonths } from '../Modal';
import { ButtonMonth } from './ButtonMonth';
import { WeekDays } from './WeekDays';

export const DateTimePicker = () => {
  const { list } = useSelector((state) => state.ui);
  const { verify } = useSelector((state) => state.appointment);
  const { month } = useSelector((state) => state.appointment.date);
  const dispatch = useDispatch();

  const [currentMonth, setCurrentMonth] = useState(month);

  useEffect(() => {
    setCurrentMonth(month);
  }, [month]);

  const toggleList = () => {
    dispatch(showList(list));
  };

  return (
    <>
      <div className='mx-auto mt-4'>
        <div className='text-center rounded'>
          <div className='mx-auto'>
            <ButtonMonth toggleList={toggleList} />
          </div>

          {list && (
            <div className='relative z-40 p-4 items-center w-full'>
              <ModalMonths show={list} />
            </div>
          )}
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:w-4/5 mx-auto'>
        <div className='grid-cols-1'>
          <WeekDays currentMonth={currentMonth} />
        </div>
        <div className='grid-cols-1'>
          <ListHour />
        </div>
      </div>
      <div className='mx-auto'>
        {verify.loading && (
          <Alert type='info' text='Comprobando...' loading={true} />
        )}
        {!verify.loading && verify.ok && (
          <>
            <Alert type='success' loading={false} text={verify.msg} />
            <div className='mt-4'>

            <ButtonGeneral title='Solicitar' bg='gray' />
            </div>
            
          </>
        )}
        {verify.ok === false && !verify.loading && (
          <Alert type='danger' loading={false} text='Hola mundo' />
        )}
      </div>
    </>
  );
};

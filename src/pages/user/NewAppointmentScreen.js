import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateAppointment } from '../../actions/appointment';
import { ButtonGeneral } from '../../components/ui/ButtonGeneral';
import { DateTimePicker } from '../../components/ui/NewAppointment/DateTimePicker';
import { ProfessionalCard } from '../../components/ui/NewAppointment/ProfessionalCard';
import { MONTHS } from '../../helpers/datePickerLocale';

export const NewAppointmentScreen = () => {
  const { appointment, auth } = useSelector(state => state);

  const dispatch = useDispatch()

  const { professional, date, create } = appointment;
  const { year,month,day, hour } = date;
  const {uid} = auth;

  
  
  const getDate = () => {

    return [ new Date(year, month, day, hour).getTime(), new Date(year, month, day, hour + 1).getTime() ]

  }
  
  
  
  const handleCreateAppointment = () => {

    const appointment = {
      professional: professional.id,
      user: uid,
      start: getDate()[0],
      end: getDate()[1],
    }
    console.log(appointment)
    dispatch( startCreateAppointment( appointment ) )
  }

  return (
    <div className='w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto'>
      <ProfessionalCard />
      <DateTimePicker />
      <h1 className='text-center font-bold text-gray-500 text-2xl my-3 dark:text-gray-500'>
        {day} de {MONTHS[month]}, {year} - {hour}:00 hs
      </h1>
      <div className='w-2/3 md:w-1/3 mx-auto'>

      <ButtonGeneral
        title='Solicitar'
        fn={handleCreateAppointment}
        text='gray-100'
        bg='indigo'
        loading={create.loading}
        disabled={false}
        />
        </div>
    </div>
  );
};

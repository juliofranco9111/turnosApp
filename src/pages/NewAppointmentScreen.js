import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { SelectProfessionalMenu } from '../components/ui/SelectProfessionalMenu';
import { ButtonGeneral } from '../components/ui/ButtonGeneral';
import { Datepicker } from '../components/ui/Datepicker';
import { startCreateAppointment } from '../actions/appointment';


moment.locale('es');

export const NewAppointmentScreen = () => {
    const dispatch = useDispatch();
    const { professional, date, verify } = useSelector((state) => state.appointment);
    const { uid } = useSelector((state) => state.auth);


   
    const handleSubmit = () => {
      dispatch(
        startCreateAppointment({
          professional: professional.id,
          user: uid,
          start: date.start,
          end: date.end
        })
      );      
      
    };

  return (
    <section
      id='section_date'
      className='w-full md:max-w-2xl mx-auto bg-white rounded-md shadow-md mb-12 dark:bg-gray-800'>
      <div className='mb-6'>
        <h2 className='text-3xl font-semibold text-center text-gray-800 dark:text-white'>
          Nuevo turno
        </h2>
      </div>

      <div>
        <div className='w-full mt-4 px-6'>
          <SelectProfessionalMenu {...professional} />

          <a className='underline text-gray-500 dark:text-gray-100' href='google.com'>
            Ver perfil
          </a>
        </div>

        <div className='justify-center dark:text-white'>
          <Datepicker />
        </div>

        <div className='mx-auto mb-10 pb-12 w-11/12'>
          {uid && professional && date && verify.ok && (
            <ButtonGeneral
              fn={handleSubmit}
              title='Agendar'
              text='white'
              bg='blue'
            />
          )}
        </div>
      </div>
    </section>
  );
};
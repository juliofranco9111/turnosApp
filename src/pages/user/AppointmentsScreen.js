import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPendingList } from '../../actions/appointment';
import { MyAppointmentsList } from '../../components/ui/MyAppointmentsList';
import { types } from '../../types/types';

export const AppointmentsScreen = () => {
  const dispatch = useDispatch();
  
  
  
  useEffect(() => {
    dispatch({ type: types.appointmentClearVerify });
    dispatch(getPendingList());
  }, [dispatch]);

  return (
    <div className='w-full md:w-4/5 mx-auto md:pl-14'>
      <div className='mx-auto flex p-3  my-6 bg-gray-50 rounded h-auto dark:bg-gray-800'>
      <h1 className='text-center font-bold text-xl md:text-2xl px-4 text-gray-600'>
              Próxima consulta:
            </h1>
            <h1 className='text-center text-gray-700 text-xl md:text-2xl pl-4'>
              26 de Mayo - 9:00hs
            </h1>
      </div>
      <div className='mx-auto flex p-3 my-6 bg-gray-50 rounded h-auto dark:bg-gray-800'>
      <h1 className='text-center font-bold text-xl md:text-2xl px-4 text-gray-600'>
              Última consulta:
            </h1>
            <h1 className='text-center text-gray-700 text-xl md:text-2xl pl-4'>
              26 de Mayo - 9:00hs
            </h1>
      </div>
      <div className='mx-auto flex md:mt-20 rounded h-auto'>
      <h1 className='text-center font-bold text-xl md:text-3xl text-gray-600'>
              Mis consultas
            </h1>
           
      </div>
      

      <div className='mx-auto md:my-6 h-72 md:h-96 overflow-y-scroll overflow-x-hidden w-full rounded'>
        <MyAppointmentsList />
      </div>
      
    </div>
  );
  
};

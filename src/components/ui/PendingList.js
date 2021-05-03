import React, { useState } from 'react';
import { PendingItem } from './PendingItem';

export const PendingList = () => {

  const [counter, setCounter] = useState(3);

  const handleCounter = () => {
    setCounter(counter - 1)
  }

  return (
      <div>
        <span className='text-gray-800 dark:text-gray-100'>
           Pendientes por confirmar ({counter})
          </span>
          {
            counter > 0 ?
            <>
            <PendingItem fn={handleCounter} msg='Turno confirmado' date='today' name='Juan Basurita' />
          <PendingItem fn={handleCounter} msg='Turno confirmado' date='yesterday' name='Vicky Xipolitakis' />
          <PendingItem fn={handleCounter} msg='Turno completado' date='3 days ago' name='Daniel Araoz' />
          </>
          :
          <div className='text-gray-50 shadow-lg pt-4 ml-2 mr-2 rounded-lg'>No hay turnos pendientes por confirmar</div>
          }
      </div>
  );
};

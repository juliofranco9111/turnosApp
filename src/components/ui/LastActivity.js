import React from 'react';
import { LastActivityItem } from './LastActivityItem';

export const LastActivity = () => {
  return (
      <div className='h-full'>
          <LastActivityItem msg='Turno confirmado' date='today' name='Juan Basurita' />
          <LastActivityItem msg='Turno confirmado' date='yesterday' name='Vicky Xipolitakis' />
          <LastActivityItem msg='Turno completado' date='3 days ago' name='Daniel Araoz' />
          <LastActivityItem msg='Turno cancelado' date='5 days ago' name='Gaston Dalmau' />
          <LastActivityItem msg='Turno completado' date='7 days ago' name='Donato de Santis' />
          <LastActivityItem msg='Turno cancelado' date='2 week ago' name='Señor Tular' />
          <LastActivityItem msg='Turno completado' date='1 month ago' name='Santiago del Moro' />
      </div>
  );
};

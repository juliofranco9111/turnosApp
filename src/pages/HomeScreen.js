import React from 'react';
import { LastActivity } from '../components/ui/LastActivity';
import { TodayList } from '../components/ui/TodayList';

export const HomeScreen = () => {
  /*  const dispatch = useDispatch();
   const { uid } = useSelector((state) => state.auth); */

  /* if( uid ){
    dispatch( getProfileUser(uid) )
  } */

  return (
      <div className='md:grid grid-cols-3 gap-2 h-full'>
        <div>
          <TodayList />
        </div>
        <div></div>
        <div className='h-full overflow-y-scroll'>
          <span className='text-gray-800 dark:text-gray-100'>
            Ultima actividad
          </span>
          <LastActivity />
        </div>
      </div>
    
  );
};

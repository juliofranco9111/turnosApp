import React from 'react';
import { PendingList } from '../components/ui/PendingList';
import { TodayList } from '../components/ui/TodayList';

export const HomeScreen = () => {
  /*  const dispatch = useDispatch();
   const { uid } = useSelector((state) => state.auth); */

  /* if( uid ){
    dispatch( getProfileUser(uid) )
  } */

  return (
      <div className='md:grid grid-cols-3 gap-2 h-full'>
        <div className='overflow-hidden'>
          <TodayList /> 
        </div>
        <div></div>
        <div className='h-full overflow-y-scroll'>
          
          <PendingList />
        </div>
      </div>
    
  );
};

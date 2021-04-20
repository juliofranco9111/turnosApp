import React from 'react';
import { Router } from 'react-router';
//import { useDispatch, useSelector } from 'react-redux';
//import { getProfileUser } from '../actions/user';
import { SideBar } from '../components/ui/SideBar';
import {HomeRouter} from '../routers/HomeRouter';

export const HomeScreen = () => {
 /*  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth); */

  /* if( uid ){
    dispatch( getProfileUser(uid) )
  } */

  return (
      <div className="flex"> 
        <SideBar /> 
    

        <div>
          <HomeRouter />
        </div>
        
      </div>
    
  );
};

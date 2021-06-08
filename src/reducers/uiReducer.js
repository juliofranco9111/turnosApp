import { MenuUser } from '../helpers/sidebarMenu';
import { types } from '../types/types';

const initialState = { list: false, listDays:false, listHour:false, theme: 'light', menu: MenuUser };

export const uiReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case types.uiSetTheme:
      return {
        ...state,
        theme: action.payload,
      };

    case types.uiSetMenu:
      return {
        ...state,
        menu: action.payload
      }

    case types.uiListMonthShow:
      return {
        ...state,
        list: true,
      };

    case types.uiListMonthHide:
      return {
        ...state,
        list: false,
      };

      case types.uiListDaysShow:
        return{
          ...state,
          listDays:true
        }
      case types.uiListDayshHide:
        return{
          ...state,
          listDays:false
        }
      case types.uiListHoursShow:
        return{
          ...state,
          listHour:true
        }
      case types.uiListHourshHide:
        return{
          ...state,
          listHour:false
        }

    default:
      return state;
  }
};

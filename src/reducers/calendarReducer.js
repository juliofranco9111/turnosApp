import { MONTHS_DAYS } from '../helpers/datePickerLocale';
import { types } from '../types/types';

const date = new Date();
const month = date.getMonth();
const daySelected = date.getDate();
const weekDay = date.getDay();
const daysMonth = MONTHS_DAYS[month];

const initialState = {
  month,
  daySelected,
  weekDay,
  daysMonth,
  modal: false
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.calendarSetMonth:
      return {
        ...state,
        month: action.payload
      };

      case types.calendarShowModal:
          return {
              ...state,
              modal: true
          }
      case types.calendarHideModal:
          return {
              ...state,
              modal: false
          }
   
    default:
      return state;
  }
};

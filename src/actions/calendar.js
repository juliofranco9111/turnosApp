import { types } from '../types/types';

export const changeMonth = (month) => ({
  type: types.calendarSetMonth,
  payload: month,
});


export const setModal = ( bool ) => ({
    type: bool ? types.calendarShowModal : types.calendarHideModal,
})

import { types } from '../types/types';

const initialState = { list: false, theme: 'light' };

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetTheme:
      return {
        ...state,
        theme: action.payload,
      };

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

    default:
      return state;
  }
};

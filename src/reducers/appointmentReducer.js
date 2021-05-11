import { types } from '../types/types';

const intialState = {
  verify: { loading: false },
  date: {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    hour: 9,
    day: new Date().getDate()
  },
};

export const appointmentReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.appointmentStartLoadingVerify:
      return {
        ...state,
        verify: { loading: true },
      };

    case types.appointmentVerifyDate:
      return {
        ...state,

        verify: {
          ...action.payload,
          loading: false,
        },
      };
    case types.appointmentClearVerify:
      return {
        ...state,
        verify: { loading: false },
      };

    case types.appointmentClearSelectedDay:
      return {
        ...state,
        verify: {
          loading: false,
        },
        date: {},
      };

    case types.appointmentSetProfessional:
      return {
        ...state,
        professional: action.payload,
      };
    case types.appointmentSetDate:
      return {
        ...state,
        date: {
          ...state.date,
          ...action.payload,
        },
      };
    case types.appointmentClear:
      return {
        verify: { loading: false },
      };

    default:
      return state;
  }
};

import { types } from '../types/types';

const intialState = {
  create:{
    loading:false
  },
  verify: { loading: false },
  date: {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    hour: 9,
    day: new Date().getDate()
  },
  appointmentsList: {
    //User
    data: [],
    loading: true
  },
  appointmentMonthList: {
    data: [],
    loading: true
  },
  appointmentDayList: []
  
}
  

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
        ...state,
        verify: { loading: false },
      };


    
    case types.appointmentLoadingCreate:
      return {
        ...state,
        create:{
          loading:true
        }
      };

    case types.appointmentCreated:
      return {
        ...state,
        create:{
          loading:false
        }
      };

    case types.appointmentListPendingUser: 
    return {
      ...state,
      appointmentsList: {
        data: action.payload,
        loading:false
      }
    };

    case types.appointmentListPendingAdmin: 
    return {
      ...state,
      appointmentMonthList: {
        data: action.payload,
        loading:false
      }
    }

    case types.appointmentSetListDays:
      return{
        ...state,
        appointmentDayList: action.payload
      }

    default:
      return state;
  }
};

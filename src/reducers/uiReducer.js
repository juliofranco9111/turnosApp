import { types } from '../types/types';



export const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case types.uiSetTheme:
      return {
        ...state,
        theme: action.payload,
      };

    
    default:
      return state;
  }
};
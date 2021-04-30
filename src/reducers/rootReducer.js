import { combineReducers } from 'redux';
import { appointmentReducer } from './appointmentReducer';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  appointment: appointmentReducer,
  ui: uiReducer,
  user: userReducer,
});


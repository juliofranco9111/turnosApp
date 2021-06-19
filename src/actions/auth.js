import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import { clearUser } from './user';
import Swal from 'sweetalert2';

// Cheking if logged
export const startChecking = () => {
  return async (dispatch) => {
    
    const resp = await fetchWithToken('auth/renew');

    const body = await resp.json();


    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(
        login({
          uid: body.uid,
        })
      );
    } else {
      localStorage.removeItem('token')
      localStorage.removeItem('token-init-date')
      dispatch(checkingFinish());
    }
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

//Register
export const startRegister = ({
  email,
  password,
  role,
  document,
  fName,
  lName,
}) => {
  const name = `${fName} ${lName}`;
  const img = 'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png';
  const endpoint = 'auth/new-user';
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      endpoint,
      { name, email, password, role, document, img },
      'POST'
    );

    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      console.log('login');

      dispatch(
        login({
          uid: body.uid,
        })
      );
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken('auth', { email, password }, 'POST');

    const body = await resp.json();


    if (!body.ok) {
      Swal.fire('Error', body.msg, 'error');
      return
    } else {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(
        login({
          uid: body.uid,
        })
      );
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('token-init-date');
    dispatch(logout());
    dispatch(clearUser());
  };
};

const logout = () => ({ type: types.authLogout });

import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { setCapital } from '../helpers/setCapitalizedString';
//import Swal from 'sweetalert2';
import { types } from '../types/types';

export const startVerifyDate = ({ start }) => {
  
  if (start) {
    return async (dispatch) => {
      dispatch({ type: types.appointmentStartLoadingVerify });

      const resp = await fetchWithToken(`turnos/date/${start.getTime()}`);

      const response = await resp.json();

      console.log(response);

      dispatch(verifyDate(response));

      if (response.ok) {
        dispatch(
          setDate({
            start
          })
        );
      }
    };
  }
};

const verifyDate = (response) => ({
  type: types.appointmentVerifyDate,
  payload: response,
});

export const clearVerify = () => ({
  type: types.appointmentClearVerify,
});

export const clearSelectedDay = () => ({
  type: types.appointmentClearSelectedDay,
});

export const getProfessionals = () => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken('usuario/profesionales');

    const response = await resp.json();

    const { name, _id: id, img, specialty } = response.professionals[0];

    const professionalName = setCapital(name);

    const professional = { name: professionalName, id, img, specialty };

    console.log('una vez')
    
    dispatch(setProfessional(professional));
    console.log('2 vez')
  };
};

const setProfessional = (professional) => ({
  type: types.appointmentSetProfessional,
  payload: professional,
});

export const setDate = (date) => ({
  type: types.appointmentSetDate,
  payload: date,
});

export const startCreateAppointment = (appointment) => {
  return async (dispatch) => {
    const resp = await fetchWithToken('turnos', appointment, 'POST');

    const response = await resp.json();

    console.log(response);
    if (response.ok) {
      Swal.fire('Éxito', response.msg, 'success');

      dispatch(appointmentCreated());
    } else {
      Swal.fire('Algo salió mal :(', response.msg, 'error');
    }
  };
};

const appointmentCreated = () => ({
  type: types.appointmentClear,
});

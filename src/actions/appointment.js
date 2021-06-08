import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { setCapital } from '../helpers/setCapitalizedString';
//import Swal from 'sweetalert2';
import { types } from '../types/types';

export const startVerifyDate = ({ start }) => {
  return async (dispatch) => {
    dispatch({ type: types.appointmentStartLoadingVerify });

    const resp = await fetchWithToken(`turnos/date/${start}`);

    const response = await resp.json();

    dispatch(verifyDate(response));
  };
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
    dispatch(setProfessional(professional));
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
    dispatch(setLoading(true));
    const resp = await fetchWithToken('turnos', appointment, 'POST');

    const response = await resp.json();

    console.log(response);
    if (response.ok) {
      dispatch(appointmentCreated());
      Swal.fire('Éxito', response.msg, 'success');
      dispatch(setLoading(false));
    } else {
      Swal.fire('Algo salió mal :(', response.msg, 'error');
      dispatch(setLoading(false));
    }
  };
};

const appointmentCreated = () => ({
  type: types.appointmentClear,
});

const setLoading = (bool) => ({
  type: bool ? types.appointmentLoadingCreate : types.appointmentCreated,
});

export const getPendingList = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken('turnos/usuario');

    const response = await resp.json();

    const { appointments } = response;

    if (response.ok) {
      dispatch(setPendingList(appointments));
    }
  };
};

const setPendingList = (list) => ({
  type: types.appointmentListPendingUser,
  payload: list,
});

export const getPendingListMonth = (month) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`turnos/profesional/${month}`);

    const response = await resp.json();

    const { appointments } = response;

    if (response.ok) {
      dispatch(setPendingListMonth(appointments));
    }
  };
};

const setPendingListMonth = (list) => ({
  type: types.appointmentListPendingAdmin,
  payload: list,
});

export const setListDays = (list) => ({
  type: types.appointmentSetListDays,
  payload: list
})
import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import { setCapital } from '../helpers/setCapitalizedString';
import { getOptionsNavbar } from './ui';

export const getProfileUser = (uid) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`usuario/id/${uid}`);

    const body = await resp.json();

    if (body.ok) {
      let nameUser = setCapital(body.name);

      dispatch(
        setProfileUser({
          name: nameUser,
          email: body.email,
          role: body.role,
          img: body.img,
        })
      );
      dispatch(getOptionsNavbar(body.role));
    }
  };
};

const setProfileUser = (user) => ({
  type: types.userSetUser,
  payload: user,
});

export const clearUser = () => ({
  type: types.userClearUser,
});

import { MenuAdmin, MenuUser } from '../helpers/sidebarMenu';
import { types } from '../types/types';

const html = document.getElementById('toggle-theme');
const calendarCss = document.getElementById('calendarCss');

export const getTheme = () => {
  const theme = localStorage.getItem('theme');

  if (!theme) {
    localStorage.setItem('theme', 'light');
  }

  if (theme === 'dark') {
    calendarCss.setAttribute('href', './styles/calendarDark.css');
  } else {
    calendarCss.setAttribute('href', './styles/calendar.css');
  }

  html.classList.add(theme);

  return { type: types.uiSetTheme, payload: theme };
};

export const setTheme = () => {
  if (html.classList.contains('dark')) {
    localStorage.setItem('theme', 'light');
    html.classList.remove('dark');
    calendarCss.setAttribute('href', './styles/calendar.css');
    return { type: types.uiSetTheme, payload: 'light' };
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    calendarCss.setAttribute('href', './styles/calendarDark.css');
    return { type: types.uiSetTheme, payload: 'dark' };
  }
};

export const showList = ( list ) => ({ type: list ? types.uiListMonthHide : types.uiListMonthShow }  );
export const showDaysList = ( list ) => ({ type: list ? types.uiListDayshHide : types.uiListDaysShow }  );
export const showHoursList = ( list ) => ({ type: list ? types.uiListHourshHide : types.uiListHoursShow }  );


export const getOptionsNavbar = ( role ) => {

  if(role === 'PROFESSIONAL_ROLE'){
    return {
      type: types.uiSetMenu,
      payload: MenuAdmin
    }
  }else{
    return {
      type: types.uiSetMenu,
      payload: MenuUser
    }
  }

}


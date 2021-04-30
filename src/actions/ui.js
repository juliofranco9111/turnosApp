import { types } from '../types/types';

const html = document.getElementById('toggle-theme');
const calendarCss = document.getElementById('calendarCss')

export const getTheme = () => {
  const theme = localStorage.getItem('theme');

  if (!theme) {
    localStorage.setItem('theme', 'light');
  }

  if(theme === 'dark'){
    calendarCss.setAttribute('href','./styles/calendarDark.css')
  }else{
    calendarCss.setAttribute('href','./styles/calendar.css')
  }
  

  html.classList.add(theme);
  return (dispatch) => {
    dispatch({ type: types.uiSetTheme, payload: theme });
  };
};

export const setTheme = () => {


  if (html.classList.contains('dark')) {
    localStorage.setItem('theme', 'light');
      html.classList.remove('dark');
      calendarCss.setAttribute('href','./styles/calendar.css')
      return (dispatch) => {
          dispatch({type: types.uiSetTheme,
            payload: 'light'})
        };
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        calendarCss.setAttribute('href','./styles/calendarDark.css')
        return (dispatch) => {
            dispatch({type: types.uiSetTheme,
                payload: 'dark'});
            };
        }  
};

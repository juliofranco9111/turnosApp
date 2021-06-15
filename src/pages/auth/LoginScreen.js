import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { ButtonAuth } from '../../components/ui/ButtonAuth';
import { InputWithLabel } from '../../components/ui/InputWithLabel';
import { LogoAuth } from '../../components/ui/LogoAuth';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: 'test@test.com',
    password: '123456',
  };
  const [values, handleInputChange] = useForm(initialValues);

  const { email, password } = values;

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    dispatch(startLogin(email, password));
  };

  return (
    <div className='sm:min-h-screen flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8 animate__animated animate__fadeIn'>
      <div className='max-w-lg bg-transparent sm:max-w-sm w-full space-y-8 sm:border-b-2 sm:border-indigo-500 dark:border-indigo-500 p-2'>
        <LogoAuth />
        <h2 className='text-center font-light text-4xl text-indigo-500 dark:text-indigo-500 '>
          Hola, Julio
        </h2>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <input type='hidden' name='remember' value='true' />
          <div className='-space-y-px'>
            <div>
              <InputWithLabel
                type='email'
                name='email'
                svgPath='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                placeholder='Correo electrónico'
                value={email}
                change={handleInputChange}
              />
            </div>
            <div>
              <InputWithLabel
                type='password'
                name='password'
                placeholder='Contraseña'
                value={password}
                change={handleInputChange}
                svgPath='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
              />
            </div>
          </div>

          <div className='grid grid-cols-3 items-center justify-around'>
            <div className='flex col-span-1 ml-3'>
              <input
                id='remember_me'
                name='remember_me'
                type='checkbox'
                className='h-4 w-4 focus:ring-indigo-500 border-gray-100'
              />
              <label
                htmlFor='remember_me'
                className='ml-2 block text-sm text-gray-700 dark:text-gray-300 dark:bg-transparent'>
                Recordar
              </label>
            </div>
            <div className='w-full col-span-2 py-2'>
              <ButtonAuth
                title='Ingresar'
                loading={loading}
                fn={handleSubmit}
                disabled={!email || !password}
              />
            </div>
          </div>
        </form>
      </div>
      <div className='grid grid-cols-2 w-full h-auto mx-auto mt-4 max-w-lg sm:max-w-sm pr-2'>
        <div className='text-sm text-center my-auto'>
          <a
            href='google'
            className='text-gray-600 hover:text-gray-800
            dark:text-gray-300 dark:hover:text-gray-100'>
            Olvidé mi contraseña
          </a>
        </div>
        <div className='text-sm w-12/12 text-center border border-gray-300 hover:bg-gray-200 transition hover:text-gray-900 hover:shadow dark:border-gray-50 dark:text-gray-200 dark:hover:text-gray-800  rounded p-2'>
          <Link to='/registro'>Crea una cuenta</Link>
        </div>
      </div>
    </div>
  );
};

/* 
return (
<div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8 bg-gray-50 dark:bg-gray-800 p-8 rounded'>
          <div>
            <h2 className='text-center text-3xl dark:text-gray-300 font-extrabold text-gray-700'>
              Ingresa a tu cuenta
            </h2>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' value='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <InputWithLabel
                  type='email'
                  name='email'
                  placeholder='Correo electrónico'
                  value={email}
                  change={handleInputChange}
                />
              </div>
              <div>
                <InputWithLabel
                  type='password'
                  name='password'
                  placeholder='Contraseña'
                  value={password}
                  change={handleInputChange}
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember_me'
                  name='remember_me'
                  type='checkbox'
                  className='h-4 w-4 checked:bg-red-500 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label
                  htmlFor='remember_me'
                  className='ml-2 block text-sm text-gray-700 dark:text-gray-300 dark:bg-transparent'>
                  Recuérdame
                </label>
              </div>

              <div className='text-sm'>
                <Link
                  to='/registro/usuario'
                  className='font-medium text-gray-600
                  dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-800'>
                  Crear una cuenta
                </Link>
              </div>

              <div className='text-sm'>
                <a
                  href='google'
                  className='font-medium text-gray-600
                  dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-800'>
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <ButtonAuth
                title='Ingresar'
                loading={loading}
                fn={handleSubmit}
                disabled={!email || !password}
              />
            </div>
          </form>
        </div>
      </div> );};*/

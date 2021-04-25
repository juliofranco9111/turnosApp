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
      <div className='max-w-lg sm:max-w-sm w-full space-y-8 bg-gray-200 dark:bg-gray-800 p-8 rounded'>
        <div>
          <LogoAuth />
          <h2 className='text-center text-3xl font-extrabold text-gray-700 dark:text-gray-300'>
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

          <div className='flex items-center justify-around'>
            <div className='flex items-center p-2'>
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
            <div className='w-6/12'>
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
      <div className='flex justify-center space-x-12 mx-auto mt-4 w-full'>
        <div className='text-sm'>
          <a
            href='google'
            className='font-medium text-gray-600 hover:text-gray-800
            dark:text-gray-300 dark:hover:text-gray-100'>
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div className='text-sm'>
          <Link
            to='/registro/usuario'
            className='font-medium text-gray-600 hover:text-gray-800
            dark:text-gray-300 dark:hover:text-gray-100'>
            Crear una cuenta
          </Link>
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

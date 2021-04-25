import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonAuth } from '../../components/ui/ButtonAuth';
import { useForm } from '../../hooks/useForm';
import { InputWithLabel } from '../../components/ui/InputWithLabel';
//import { InputErrorAlert } from '../../components/ui/InputErrorAlert';
import { Link, useParams } from 'react-router-dom';
import { startRegister } from '../../actions/auth';
import { LogoAuth } from '../../components/ui/LogoAuth';

export const RegisterScreen = () => {
  const [routeUser, setRouteType] = useState(true);
  //const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  const { type } = useParams();

  useEffect(() => {
    if (type === 'profesional') {
      setRouteType(false);
    }
  }, [type]);

  const dispatch = useDispatch();

  const initialValues = {
    fName: '',
    lName: '',
    email: '',
    specialty: '',
    password: '',
    rePassword: '',
  };

  const [values, handleInputChange] = useForm(initialValues);

  const { fName, lName, email, specialty, password, rePassword } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      ...values,
      role: type === 'profesional' ? 'PROFESSIONAL_ROLE' : 'USER_ROLE',
    };

    console.log(formData);

    dispatch(startRegister(formData));
    setLoading(false);
  };

  return (
    <div className='animate__animated animate__fadeIn'>
      <div className='sm:min-h-screen flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8 sm:bg-gray-200 sm:dark:bg-gray-800 p-8 rounded'>
          <div>
            <LogoAuth />
            <h2 className='text-center text-3xl font-extrabold text-gray-700 dark:text-gray-300'>
              Crear una cuenta
            </h2>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <div className='rounded-md shadow-sm -space-y-px'>
              {/* {!errors && (
                <div className='animate__animated animate__fadeIn animate__faster'>
                  <InputErrorAlert />
                </div>
              )} */}
              
              <div className='justify-between'>
                  <InputWithLabel
                    type='text'
                    name='fName'
                    placeholder='Nombre'
                    value={fName}
                    change={handleInputChange}
                  />
                  <InputWithLabel
                    type='text'
                    name='lName'
                    placeholder='Apellido'
                    value={lName}
                    change={handleInputChange}
                  />
              </div>

              {!routeUser && (
                <div>
                  <InputWithLabel
                    type='text'
                    name='specialty'
                    placeholder='Especialidad'
                    value={specialty}
                    change={handleInputChange}
                  />
                </div>
              )}

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
              <div>
                <InputWithLabel
                  type='password'
                  name='rePassword'
                  placeholder='Repetir constraseña'
                  value={rePassword}
                  change={handleInputChange}
                />
              </div>
            </div>

            <div>
              <ButtonAuth
                fn={handleSubmit}
                title='Registrarse'
                loading={loading}
              />
            </div>
          </form>
        </div>
        <div className='flex justify-center space-x-12 mx-auto mt-4 w-full'>
          <div>
            <p className='mt-2 text-center text-sm text-gray-600'>
              <Link
                to='/ingreso'
                className='font-medium text-gray-600 hover:text-gray-800 
                    dark:text-gray-300 dark:hover:text-gray-100'>
                Ya tengo una cuenta
              </Link>
            </p>
          </div>
          <div>
            {!routeUser ? (
              <p className='mt-2 text-center text-sm text-gray-600'>
                <Link
                  to='/registro/usuario'
                  className='font-medium text-gray-600 hover:text-gray-800 
                      dark:text-gray-300 dark:hover:text-gray-100'>
                  Registrarme como usuario
                </Link>
              </p>
            ) : (
              <p className='mt-2 text-center text-sm text-gray-600'>
                <Link
                  to='/registro/profesional'
                  className='font-medium text-gray-600 hover:text-gray-800
                      dark:text-gray-300 dark:hover:text-gray-100'>
                  Soy un profesional
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

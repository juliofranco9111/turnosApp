import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonAuth } from '../../components/ui/ButtonAuth';
import { useForm } from '../../hooks/useForm';
import { InputWithLabel } from '../../components/ui/InputWithLabel';
//import { InputErrorAlert } from '../../components/ui/InputErrorAlert';
import { Link } from 'react-router-dom';
import { startRegister } from '../../actions/auth';
import { LogoAuth } from '../../components/ui/LogoAuth';

export const RegisterScreen = () => {
  //const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const initialValues = {
    fName: '',
    lName: '',
    email: '',
    document: '',
    password: '',
    rePassword: '',
  };

  const [values, handleInputChange] = useForm(initialValues);

  const { fName, lName, email, password, rePassword, document } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      ...values,
      role: 'USER_ROLE',
    };

    dispatch(startRegister(formData));
    setLoading(false);
  };

  return (
    <div className='sm:min-h-screen flex flex-col items-center justify-center sm:px-6 lg:px-8 animate__animated animate__fadeIn'>
      <div className='max-w-lg sm:max-w-sm w-full space-y-5 p-2'>
        <LogoAuth />
        <h2 className='text-center font-light text-4xl text-indigo-500 dark:text-indigo-500'>
          Crea tu cuenta
        </h2>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <div className='-space-y-px'>
            {/*    <div className='animate__animated animate__fadeIn animate__faster'>
                  <InputErrorAlert title='Error' msg='la contraseña está mala'/>
                </div>
              */}

            <div>
              <InputWithLabel
                type='text'
                name='fName'
                placeholder='Nombre'
                svgPath='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                value={fName}
                change={handleInputChange}
              />
            </div>
            <div>
              <InputWithLabel
                type='text'
                name='lName'
                svgPath='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                placeholder='Apellido'
                value={lName}
                change={handleInputChange}
              />
            </div>

            <div className='grid grid-cols-1'>
              <div>
                <InputWithLabel
                  type='number'
                  name='document'
                  placeholder='Documento'
                  svgPath='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
                  value={document}
                  change={handleInputChange}
                />
              </div>
              <div>
                <InputWithLabel
                  type='email'
                  name='email'
                  placeholder='Correo electrónico'
                  value={email}
                  svgPath='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  change={handleInputChange}
                />
              </div>
            </div>
            <div>
              <InputWithLabel
                type='password'
                name='password'
                svgPath='M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01'
                placeholder='Contraseña'
                value={password}
                change={handleInputChange}
              />
            </div>

            <div>
              <InputWithLabel
                type='password'
                name='rePassword'
                placeholder='Repite contraseña'
                svgPath='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                value={rePassword}
                change={handleInputChange}
              />
            </div>
          </div>
        </form>
        <div className='grid grid-cols-2 gap-2 mx-auto mt-4 w-full'>
          <div>
            
              <Link to='/ingreso'>
                <button className='text-sm h-10 w-full border my-auto text-center hover:bg-gray-200 transition px-3 hover:text-gray-900 hover:shadow dark:border-gray-50 dark:text-gray-200 dark:hover:text-gray-800 rounded'>Tengo una cuenta</button>
                </Link>
            
          </div>
          <div>
            <ButtonAuth
              fn={handleSubmit}
              title='Registrarse'
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

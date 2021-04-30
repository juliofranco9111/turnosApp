import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { Loading } from '../components/ui/Loading';
import { InputWithLabel } from '../components/ui/InputWithLabel';
import { ButtonGeneral } from '../components/ui/ButtonGeneral';
import { INPUT_CLASS } from '../helpers/commonCss';
import { adminRole } from '../helpers/role';

export const ProfileScreen = () => {
  const user = useSelector((state) => state.user);

  const {
    loading,
    email,
    name,
    role,
    img,
    phone,
    description,
    specialty,
    document,
  } = user;

  const initialValues = {
    userName: name,
    userEmail: email,
    userPhone: phone,
    userDescription: description,
    userSpecialty: specialty,
    userDocument: document,
  };

  const [formValues, handleInputChange] = useForm(initialValues);

  const {
    userName,
    userEmail,
    userPhone,
    userDescription,
    userSpecialty,
    userDocument,
  } = formValues;

  //document.querySelector('#picturePicker').click()

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='mt-24'>
      <div
        className='w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:bg-gray-800'
        style={{ maxWidth: '500px' }}>
        <div className='w-full pt-1 pb-5'>
          <div className='overflow-hidden rounded-full w-32 h-32 -mt-24 mx-auto shadow-lg border-4 border-gray-100'>
            <img src={img} alt='hola' />
          </div>
        </div>

        <div className='w-full'>
          <input type='file' className='hidden' id='picturePicker' />
          <InputWithLabel
            placeholder='Nombre...'
            value={userName || ''}
            name='userName'
            change={handleInputChange}
          />
          <InputWithLabel
            placeholder='Correo...'
            value={userEmail || ''}
            name='userEmail'
            change={handleInputChange}
          />
          {role === adminRole ? (
            <InputWithLabel
              placeholder='Especialidad...'
              value={userSpecialty || ''}
              name='userSpecialty'
              change={handleInputChange}
            />
          ) : (
            <InputWithLabel
              placeholder='Documento...'
              value={userDocument}
              name='userDocument'change={handleInputChange}
            />
          )}
          <InputWithLabel
            placeholder='Teléfono...'
            value={userPhone || ''}
            name='userPhone'
            change={handleInputChange}
          />
          <textarea
            value={userDescription || ''}
            name='userDescription'
            onChange={handleInputChange}
            className={`w-full h-12 ${INPUT_CLASS}`}
            placeholder='Reseña..'></textarea>
        </div>

        <div className='mt-6'>
          <ButtonGeneral title='Actualizar' bg='indigo' />
        </div>
      </div>
    </div>
  );
};

/* 
<div className='mt-16'>
      <div
        className='w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:bg-gray-800'
        style={{ maxWidth: '500px' }}>
        <div className='w-full pt-1 pb-5'>
          <div className='overflow-hidden rounded-full w-32 h-32 -mt-24 mx-auto shadow-lg border-4 border-gray-100'>
            <img src={img} alt='hola' />
          </div>
          <div className='w-full text-center text-2xl mt-3 font-bold dark:text-gray-300'>
            <h1>{name}</h1>
          </div>
        </div>
        <div className='w-full mb-10'>
          <div className='text-3xl text-indigo-500 text-left leading-tight h-3'>
            “
          </div>
          <p className='text-sm text-gray-600 text-center px-5 dark:text-gray-300'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
            voluptatibus temporibus odio provident.
          </p>
          <div className='text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3'>
            ”
          </div>
        </div>

        <div className='w-full grid grid-cols-3'>
          <p className='text-md text-gray-600 font-bold text-center dark:text-gray-300'>
            {email}
          </p>
          <p className='text-md text-gray-600 font-bold text-center dark:text-gray-300'>
            317-625-4485
          </p>
          <p className='text-md text-gray-600 font-bold text-center dark:text-gray-300'>
            @test1
          </p>
        </div>
      </div>
    </div>

*/

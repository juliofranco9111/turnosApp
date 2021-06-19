import React, { useState } from 'react';
import Modal from 'react-modal';
import { ListHour } from '../ListHour';
import { useDispatch, useSelector } from 'react-redux';
import { showHoursList } from '../../../actions/ui';
import { Alert } from '../Alert';
import { ButtonGeneral } from '../ButtonGeneral';
import { clearVerify } from '../../../actions/appointment';

const customStyles = {
  content: {
    top: '50%',
    width: '100vw',
    height: 'auto',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'transparent',
    marginBottom: '50px',
    zIndex: '50',
    position: 'absolute',
  },
  overlay: {
    background: 'rgb(0,0,0, 78%)',
  },
};
Modal.setAppElement('#root');

export const ModalTimePicker = ({ show = false }) => {
  const { listHour } = useSelector((state) => state.ui);
  const { verify } = useSelector((state) => state.appointment);

  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(show);
  function closeModal() {
    setIsOpen(!modalIsOpen);
    dispatch(showHoursList(listHour)); 
    dispatch(clearVerify()); 
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'>
      <div className='mx-auto bg-gray-50 rounded p-4 w-full md:w-2/3 dark:bg-gray-800'>
        <h1 className='text-center font-bold text-2xl text-gray-600 dark:text-gray-200'>Selecciona una hora:</h1>
        <ListHour />
        <div className='mx-auto'>
        {verify.loading && (
          <Alert type='info' text='Comprobando...' loading={true} />
        )}
        {!verify.loading && verify.ok && (
          <>
            <Alert type='success' loading={false} text={verify.msg} />
            
          </>
        )}
        {!verify.loading && verify.ok != null && !verify.ok && (
          <Alert type='danger' loading={false} text={verify.msg} />
        )}
      </div>
      <ButtonGeneral fn={closeModal} title='Confirmar' text='gray-100' bg='indigo' disabled={verify.loading || !verify.ok}/>
      <div className='mt-4'>

      <ButtonGeneral fn={closeModal} title='Cancelar' text='gray-100' bg='gray' disabled={false}/>
      </div>
      </div>
    </Modal>
  );
};

import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { showList } from '../../../actions/ui';
import { MonthsList } from '../NewAppointment/MonthsList';

export const ModalBody = ({ visibility = false }) => {
  const dispatch = useDispatch();
  const customStyles = {
    content: {
      top: '50%',
      width: '100vw',
      height: '50vh',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      border:'none',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '5'
    },
    overlay: {
      background: 'rgb(0,0,0, 80%)',
    },
  };
  Modal.setAppElement('#body');

  const onClose = () => {
    dispatch(showList(true));
  };

  return (
    <Modal
      isOpen={visibility}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel='Example Modal'>
      <MonthsList />
    </Modal>
  );
};

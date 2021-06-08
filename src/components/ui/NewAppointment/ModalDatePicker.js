import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { showDaysList } from '../../../actions/ui';
import { WeekDays } from './WeekDays';

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
export const ModalDatePicker = ({ show = false }) => {
  const { month } = useSelector((state) => state.appointment.date);

  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(show);

  function closeModal() {
    setIsOpen(!modalIsOpen);
    dispatch(showDaysList(show));
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'>
      <div className='mx-auto bg-white p-4 w-full md:w-2/3 dark:bg-gray-800'>
          <WeekDays currentMonth={month} />
      </div>
    </Modal>
  );
};

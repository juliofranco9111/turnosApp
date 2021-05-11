import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { showList } from '../../actions/ui';
import { ButtonMonth } from './NewAppointment/ButtonMonth';
import { MonthsList } from './NewAppointment/MonthsList'



export const ModalBody = ({
  visibility = false,
}) => {
  const {month} = useSelector(state => state.appointment)
  const {list} = useSelector(state => state.ui)
  const dispatch = useDispatch();
  const customStyles = {
    content: {
      top: '50%',
      width: '70vw',
      height: '30vh',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'transparent',
    },
    overlay: {
      background: 'rgb(0,0,0, 78%)',
    },
  };
  Modal.setAppElement('#root');

 

  const onClose = () => {
    dispatch(showList(true))
  }

  return (
    
      <Modal
        isOpen={visibility}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel='Example Modal'>
        <MonthsList  />
        
      </Modal>
    
  );
};

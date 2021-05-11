import React, { useState } from 'react'
import { ModalBody } from './ModalBody';

export const ModalMonths = ({show=false}) => {
    const [modalIsOpen, setIsOpen] = useState(show);
    function closeModal() {
      setIsOpen(false);
    }
    return (
            <ModalBody closeFn={closeModal} visibility={modalIsOpen}/>
    )
}

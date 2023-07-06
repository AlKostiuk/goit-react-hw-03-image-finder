import React from 'react';
import style from './modal.module.css';
import Loader from 'components/Loader/Loader';

const Modal = ({ picture, onClose, isLoading }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={style.overlay} onClick={handleClose}>
      <div className={style.modal}>
        {isLoading ? (
          <Loader />
        ) : (
          <img src={picture} alt="" />
        )}
      </div>
    </div>
  );
};

export default Modal;

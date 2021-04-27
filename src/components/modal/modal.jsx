import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { isOpen, onClose, addClass, children } = props;
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={`modal ${addClass}`}>
        <div className="modal_close" onClick={() => onClose()}>
          &times;
        </div>
        <div className="modal_content">{children}</div>
      </div>
      <div className="bg" onClick={() => onClose()} />
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  addClass: PropTypes.string
};

export default Modal;

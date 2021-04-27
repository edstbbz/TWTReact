import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { onClose, classList, children } = props;
  
  return (
    <div>
      <div className={`modal ${classList}`}>
        <div className="modal_close" onClick={onClose}>
          &times;
        </div>
        <div className="modal_content">{children}</div>
      </div>
      <div className="bg" onClick={onClose} />
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  classList: PropTypes.string,
  children: PropTypes.node
};

export default Modal;

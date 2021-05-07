import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { onClose, children } = props;

  return (
    <div>
      <div className="modal">
        <button type="button" className="modal_close" onClick={onClose}>
          &times;
        </button>
        <div className="modal_content">{children}</div>
      </div>
      <div onClick={onClose} aria-hidden="true" className="bg"/>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;

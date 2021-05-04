import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Message = (props) => {
  const { children, onDelete, autoClose, timeout, type } = props;
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isClosing) {
      const removeMessage = setTimeout(onDelete, timeout - timeout + 400);
      return () => clearTimeout(removeMessage);
    }
    return null;
  }, [isClosing, onDelete]);

  useEffect(() => {
    if (autoClose) {
      const timeoutId = setTimeout(() => setIsClosing(true), timeout - 500);
      return () => clearTimeout(timeoutId);
    }
    return null;
  }, [autoClose]);

  return (
    <div
      className={cn('message_body', `message_${type}`, {
        moveto: !isClosing,
        movedown: isClosing,
      })}
    >
      <span>{children}</span>
      <button type="button" className="delete__message" onClick={onDelete}>
        &times;
      </button>
    </div>
  );
};

Message.propTypes = {
  children: PropTypes.string.isRequired,
  timeout: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  autoClose: PropTypes.bool,
  type: PropTypes.string,
};

Message.defaultProps = {
  type: '',
  autoClose: false,
};

export default Message;

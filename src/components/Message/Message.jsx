import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { children } = props;

  if (children) {
    return (
      <div className="message_body">
        <span>{children}</span>
      </div>
    );
  }

  return null;
};

Message.propTypes = {
  children: PropTypes.string,
};

Message.defaultProps = {
  children: '',
};

export default Message;

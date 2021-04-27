import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { children, className } = props;
  return <span className={className}>{children}</span>;
};

Message.propTypes = {
  className: PropTypes.string
};

export default Message;

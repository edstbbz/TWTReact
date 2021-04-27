import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const { value, onChange, className } = props;
  return (
    <input
      onChange={onChange}
      className={`input ${className}`}
      type="text"
      placeholder="Enter text..."
      value={value}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default TextInput;

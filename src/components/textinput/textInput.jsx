import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const {
    value,
    onChange,
    hasError,
    placeholder,
    type,
  } = props;

  return (
    <input
      onChange={onChange}
      className={`input ${hasError && 'error'}`}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;

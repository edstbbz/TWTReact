import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const { value, onChange, isError, placeholder, type } = props;
  return (
    <input
      onChange={onChange}
      className={`input ${isError}`}
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
  isError: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextInput;

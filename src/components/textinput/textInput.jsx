import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const { value, onChange, className, placeholder } = props;
  return (
    <input
      onChange={onChange}
      className={`input ${className}`}
      type="text"
      placeholder={placeholder}
      value={value}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextInput;

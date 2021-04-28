import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const { value, onChange, hasError, placeholder, type } = props;
  const classes = ['input'];
  if (hasError) {
    classes.push('error');
  }

  return (
    <input
      onChange={onChange}
      className={classes.join(' ')}
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
  hasError: PropTypes.bool,
  placeholder: PropTypes.string
};

export default TextInput;

import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { disabled } = props;
  return (
    <button type="button" disabled={disabled} className="button">
      Submit
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default Button;

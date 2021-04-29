import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { disabled, onClick } = props;
  return (
    <button type="button" disabled={disabled} onClick={onClick} className="button">
      Submit
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;

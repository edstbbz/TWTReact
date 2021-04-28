import React from 'react';
import PropTypes from 'prop-types';

const FormLimit = (props) => {
  const { value, maxValue } = props;

  return (
    <span className="counter">
      {value}/{maxValue}
    </span>
  );
};

FormLimit.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};

export default FormLimit;

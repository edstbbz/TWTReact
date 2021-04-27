import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  const { value, maxValue } = props;

  return (
    <span className="counter">
      {value}/{maxValue}
    </span>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired
};

export default Counter;

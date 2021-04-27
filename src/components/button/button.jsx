import React from 'react';
import PropTypes from 'prop-types';

const Submit = (props) => {
  const { disabled } = props;
  return (
    <button disabled={disabled} className="button">
      Submit
    </button>
  );
};

Submit.propTypes = {
  disabled: PropTypes.bool
};

export default Submit;

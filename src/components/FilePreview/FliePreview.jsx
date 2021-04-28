import React from 'react';
import PropTypes from 'prop-types';

const FilePreview = (props) => {
  const { children } = props;

  if (children === 0) {
    return null;
  }
  return <div className="files__preview">{children}</div>;
};

FilePreview.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FilePreview;

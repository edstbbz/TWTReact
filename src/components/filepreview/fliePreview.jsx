import React from 'react';

const FilePreview = (props) => {
  const { file, children } = props;
  if (file > 0) {
    return <div className="files__preview">{children}</div>;
  }
  return null;
};

export default FilePreview;

import React from 'react';
import PropTypes from 'prop-types';

const FileLoader = (props) => {
  const { onChange } = props;
  return (
    <div className="files__wrap">
      <label className="label__files" htmlFor="files">
        <input
          onChange={onChange}
          id="files"
          className="files"
          name="files"
          type="file"
          accept=".jpg,.jpeg,.png,.gif,.webp"
          multiple
        />
      </label>
    </div>
  );
};

FileLoader.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FileLoader;

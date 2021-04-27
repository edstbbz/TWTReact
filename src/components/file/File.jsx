import React from 'react';
import PropTypes from 'prop-types';

const File = (props) => {
  const { img, onDelete, onClick } = props;
  return (
    <div className="image__container">
      <div className="img__preview" data-title="Zoom">
        <img src={URL.createObjectURL(img)} alt={img} onClick={onClick} />
      </div>
      <span className="delete__btn" onClick={onDelete}>
        &times;
      </span>
    </div>
  );
};

File.propTypes = {
  img: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func
};

export default File;

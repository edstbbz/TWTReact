import React from 'react';
import PropTypes from 'prop-types';

const File = (props) => {
  const { img, onDelete, onClick } = props;

  return (
    <div className="image__container">
      <div className="img__preview" data-title="Zoom">
        <button type="button" className="img__open" onClick={onClick}>
          <img src={URL.createObjectURL(img)} alt={img} />
        </button>
      </div>
      <button type="button" className="delete__btn" onClick={onDelete}>
        &times;
      </button>
    </div>
  );
};

File.propTypes = {
  img: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default File;

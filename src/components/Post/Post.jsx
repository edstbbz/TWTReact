import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ text, images, onDelete }) => (
  <div className="post">
    <div className="post__content">
      <div className="message">
        <div className="img__post_container">{images}</div>
        <div className="text__post_container">
          <span>{text}</span>
        </div>
      </div>
    </div>
    <button type="button" className="delete__post" onClick={onDelete}>
      &times;
    </button>
  </div>
);

Post.propTypes = {
  text: PropTypes.string.isRequired,
  images: PropTypes.node,
  onDelete: PropTypes.func.isRequired,
};

Post.defaultProps = {
  images: null,
};

export default Post;

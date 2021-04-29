import React, { useState } from 'react';
import Form from '../../components/Form';
import Modal from '../../components/Modal';
import Post from '../../components/Post';

const Posts = () => {
  const [postContent, setPostContent] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileForModal, setFileForModal] = useState();

  const fileModalOpen = (open, img) => {
    setFileForModal(img);
    setIsModalOpen(open);
  };

  const createPostContent = (data) => {
    const content = [
      ...postContent,
      {
        id: postContent.length,
        message: data.message,
        images: data.images,
      },
    ];
    setPostContent(content);
  };

  const handlePostDelete = (id) => {
    const content = postContent.filter((post) => post.id !== id);
    setPostContent(content);
  };

  const createPost = postContent
    .map((post) => {
      const images = post.images.map((img) => (
        <div key={img.name} className="img__post">
          <img
            src={URL.createObjectURL(img)}
            alt={img.name}
            aria-hidden="true"
            onClick={() => fileModalOpen(true, img)}
          />
        </div>
      ));
      return (
        <Post
          key={post.id}
          text={post.message}
          images={images}
          onDelete={() => handlePostDelete(post.id)}
        />
      );
    })
    .reverse();

  return (
    <div className="posts">
      <Form createContent={createPostContent} fileModalOpen={fileModalOpen} />
      <div className="posts__container">
        {postContent.length < 1 && <h3 className="post__message">No posts yet</h3>}
        <div className="list">{createPost}</div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => fileModalOpen(false)}>
          <img src={URL.createObjectURL(fileForModal)} alt={fileForModal.name} />
        </Modal>
      )}
    </div>
  );
};

export default Posts;

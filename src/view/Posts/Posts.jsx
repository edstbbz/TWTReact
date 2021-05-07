import React, { useState } from 'react';
import Form from '../../components/Form';
import Modal from '../../components/Modal';
import Post from '../../components/Post';
import Message from '../../components/Message';

const Posts = () => {
  const [postContent, setPostContent] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileForModal, setFileForModal] = useState();
  const [notifications, setNotifications] = useState([]);

  const deleteNotification = (id) =>
    setNotifications(notifications.filter((notification) => notification.id !== id));

  const createNotification = (message, type) =>
    setNotifications([...notifications, { id: new Date().getTime(), message, type }]);

  const fileModalOpen = (open, img) => {
    setFileForModal(img);
    setIsModalOpen(open);
  };

  const createPostContent = (data) => {
    const content = [
      ...postContent,
      {
        id: new Date().getTime(),
        message: data.message,
        images: data.images,
      },
    ];
    setPostContent(content);
    createNotification('POST CREATED SUCCESSFULLY', 'success');
  };

  const handlePostDelete = (id) => {
    const content = postContent.filter((post) => post.id !== id);
    setPostContent(content);
    createNotification('POST SUCCESSFULLY DELETED');
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

  const notificationsList = notifications
    .map((note) => (
      <Message
        key={note.id}
        onDelete={() => deleteNotification(note.id)}
        timeout={2400}
        type={note.type}
        autoClose
      >
        {note.message}
      </Message>
    ))
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
      {notifications.length !== 0 && (
        <div className="notification_container">{notificationsList} </div>
      )}
    </div>
  );
};

export default Posts;

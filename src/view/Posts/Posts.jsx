import React, { useState } from 'react';
import Form from '../../components/Form';
import Post from '../../components/Post';

const Posts = () => {
  const [postContent, setPostContent] = useState([]);

  const createPostContent = (callback) => {
    const content = [
      ...postContent,
      {
        id: callback.id,
        message: callback.message,
        images: callback.images,
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
          <img src={URL.createObjectURL(img)} alt={img} />
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
    <div className="app">
      <Form createContent={createPostContent} />
      <div className="posts__container">
        {postContent.length < 1 && <h3 className="post__message">No posts yet</h3>}
        <div className="list">{createPost}</div>
      </div>
    </div>
  );
};

export default Posts;

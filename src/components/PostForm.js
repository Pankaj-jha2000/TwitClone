import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PostForm = ({ addPost }) => {
  const [thought, setThought] = useState('');

  const handlePost = (e) => {
    e.preventDefault();
    if (thought.trim()) {
      addPost(thought);
      setThought('');
    }
  };

  return (
    <Form className="post-form" onSubmit={handlePost}>
      <Form.Group controlId="postInput">
        <Form.Control
          type="text"
          placeholder="What's happening?"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="post-btn">
        Tweet
      </Button>
    </Form>
  );
};

export default PostForm;

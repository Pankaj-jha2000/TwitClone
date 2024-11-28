import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaHeart, FaComment } from 'react-icons/fa';

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => setLikes(likes + 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="post-card"
    >
      <Card>
        <Card.Body>
          <div className="post-header">
            {/* Use the image from the public folder */}
            <img src={post.profileImage || "/profile.png"} alt="Profile" className="profile-img" />
            <div>
              <Card.Title>{post.user}</Card.Title>
              <Card.Subtitle className="text-muted">{post.timestamp}</Card.Subtitle>
            </div>
          </div>
          <Card.Text className="post-text">{post.text}</Card.Text>
          <div className="post-actions">
            <Button variant="link" onClick={handleLike}>
              <FaHeart className="icon" /> {likes}
            </Button>
            <Button variant="link">
              <FaComment className="icon" /> {post.comments.length}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default PostCard;

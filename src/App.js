import React, { useState } from 'react';
import NavbarComponent from './components/Navbar';
import PostForm from './components/PostForm';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (text) => {
    const newPost = {
      id: Date.now(),
      text,
      user: 'John Doe',
      profileImage: '/profile.png',
      timestamp: new Date().toLocaleTimeString(),
      likes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="app">
      <NavbarComponent />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <PostForm addPost={addPost} />
          <div className="posts">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

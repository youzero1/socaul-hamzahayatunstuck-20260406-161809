'use client';

import { useState } from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import { initialPosts, currentUser } from '@/lib/data';
import type { Post } from '@/lib/types';

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const liked = p.likedByMe;
        return { ...p, likes: liked ? p.likes - 1 : p.likes + 1, likedByMe: !liked };
      }
      return p;
    }));
  };

  const handleComment = (postId: string, text: string) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const newComment = {
          id: Date.now().toString(),
          userId: currentUser.id,
          userName: currentUser.name,
          userAvatar: currentUser.avatar,
          text,
          time: 'Just now',
        };
        return { ...p, comments: [...p.comments, newComment] };
      }
      return p;
    }));
  };

  const handleCreate = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      userId: currentUser.id,
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      content,
      likes: 0,
      likedByMe: false,
      comments: [],
      time: 'Just now',
    };
    setPosts(prev => [newPost, ...prev]);
  };

  return (
    <div>
      <CreatePost onCreate={handleCreate} />
      {posts.map(post => (
        <PostCard key={post.id} post={post} onLike={handleLike} onComment={handleComment} />
      ))}
    </div>
  );
}

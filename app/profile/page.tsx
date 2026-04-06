'use client';

import Header from '@/components/Header';
import { currentUser, initialPosts } from '@/lib/data';
import PostCard from '@/components/PostCard';
import { useState } from 'react';
import type { Post } from '@/lib/types';

export default function ProfilePage() {
  const [posts, setPosts] = useState<Post[]>(initialPosts.filter(p => p.userId === currentUser.id));

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

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Header />
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '0 0 8px 8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
          marginBottom: '16px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '200px',
            background: 'linear-gradient(135deg, #1877f2 0%, #42b72a 100%)',
          }} />
          <div style={{ padding: '0 24px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', marginTop: '-40px', marginBottom: '16px' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: currentUser.avatar,
                border: '4px solid #ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                flexShrink: 0,
              }}>
                {currentUser.name.charAt(0)}
              </div>
              <div style={{ paddingBottom: '8px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: '700' }}>{currentUser.name}</h1>
                <p style={{ color: '#65676b', fontSize: '14px' }}>{currentUser.bio}</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', borderTop: '1px solid #e4e6eb', paddingTop: '16px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: '700' }}>{posts.length}</div>
                <div style={{ fontSize: '13px', color: '#65676b' }}>Posts</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: '700' }}>248</div>
                <div style={{ fontSize: '13px', color: '#65676b' }}>Friends</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: '700' }}>1.2K</div>
                <div style={{ fontSize: '13px', color: '#65676b' }}>Likes</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: '0 16px' }}>
          {posts.length === 0 ? (
            <div className="card" style={{ padding: '40px', textAlign: 'center', color: '#65676b' }}>
              No posts yet
            </div>
          ) : (
            posts.map(post => (
              <PostCard key={post.id} post={post} onLike={handleLike} onComment={handleComment} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

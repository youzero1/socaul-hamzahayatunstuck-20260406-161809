'use client';

import { useState } from 'react';
import type { Post } from '@/lib/types';
import CommentSection from './CommentSection';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string, text: string) => void;
}

export default function PostCard({ post, onLike, onComment }: PostCardProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="card">
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: post.userAvatar,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '18px',
            flexShrink: 0,
          }}>
            {post.userName.charAt(0)}
          </div>
          <div>
            <div style={{ fontWeight: '600', fontSize: '15px' }}>{post.userName}</div>
            <div style={{ fontSize: '12px', color: '#65676b' }}>{post.time}</div>
          </div>
        </div>

        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#1c1e21', marginBottom: '12px' }}>
          {post.content}
        </p>

        {post.image && (
          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '12px',
            backgroundColor: '#f0f2f5',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#65676b',
          }}>
            📷 Image
          </div>
        )}

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 0',
          borderTop: '1px solid #e4e6eb',
          borderBottom: '1px solid #e4e6eb',
          marginBottom: '4px',
        }}>
          <span style={{ fontSize: '13px', color: '#65676b' }}>
            {post.likes > 0 && `❤️ ${post.likes} ${post.likes === 1 ? 'like' : 'likes'}`}
          </span>
          <button
            onClick={() => setShowComments(!showComments)}
            style={{ fontSize: '13px', color: '#65676b', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {post.comments.length > 0 && `💬 ${post.comments.length} ${post.comments.length === 1 ? 'comment' : 'comments'}`}
          </button>
        </div>

        <div style={{ display: 'flex', gap: '4px', paddingTop: '4px' }}>
          <button
            onClick={() => onLike(post.id)}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              color: post.likedByMe ? '#1877f2' : '#65676b',
              backgroundColor: post.likedByMe ? '#e7f0fd' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            {post.likedByMe ? '❤️' : '🤍'} Like
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#65676b',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            💬 Comment
          </button>
          <button
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#65676b',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            🔗 Share
          </button>
        </div>
      </div>

      {showComments && (
        <CommentSection
          comments={post.comments}
          onComment={(text) => onComment(post.id, text)}
        />
      )}
    </div>
  );
}

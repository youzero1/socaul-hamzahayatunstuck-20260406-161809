'use client';

import { useState } from 'react';
import type { Comment } from '@/lib/types';
import { currentUser } from '@/lib/data';

interface CommentSectionProps {
  comments: Comment[];
  onComment: (text: string) => void;
}

export default function CommentSection({ comments, onComment }: CommentSectionProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onComment(text.trim());
      setText('');
    }
  };

  return (
    <div style={{
      backgroundColor: '#f0f2f5',
      padding: '12px 16px',
      borderTop: '1px solid #e4e6eb',
    }}>
      {comments.map(comment => (
        <div key={comment.id} style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '10px',
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: comment.userAvatar,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '13px',
            flexShrink: 0,
          }}>
            {comment.userName.charAt(0)}
          </div>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '8px 12px',
            flex: 1,
          }}>
            <div style={{ fontWeight: '600', fontSize: '13px', marginBottom: '2px' }}>{comment.userName}</div>
            <div style={{ fontSize: '14px', color: '#1c1e21' }}>{comment.text}</div>
            <div style={{ fontSize: '11px', color: '#65676b', marginTop: '4px' }}>{comment.time}</div>
          </div>
        </div>
      ))}

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: currentUser.avatar,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: '700',
          fontSize: '13px',
          flexShrink: 0,
        }}>
          {currentUser.name.charAt(0)}
        </div>
        <div style={{ flex: 1, display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Write a comment..."
            style={{
              flex: 1,
              padding: '8px 14px',
              borderRadius: '20px',
              border: '1px solid #ccd0d5',
              backgroundColor: '#ffffff',
              fontSize: '14px',
              color: '#1c1e21',
            }}
          />
          <button
            type="submit"
            disabled={!text.trim()}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              backgroundColor: text.trim() ? '#1877f2' : '#e4e6eb',
              color: text.trim() ? '#ffffff' : '#bcc0c4',
              fontWeight: '600',
              fontSize: '13px',
              border: 'none',
              cursor: text.trim() ? 'pointer' : 'not-allowed',
              transition: 'background-color 0.2s',
            }}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

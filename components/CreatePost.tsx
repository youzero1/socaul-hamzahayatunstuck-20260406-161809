'use client';

import { useState } from 'react';
import { currentUser } from '@/lib/data';

interface CreatePostProps {
  onCreate: (content: string) => void;
}

export default function CreatePost({ onCreate }: CreatePostProps) {
  const [content, setContent] = useState('');
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onCreate(content.trim());
      setContent('');
      setFocused(false);
    }
  };

  return (
    <div className="card" style={{ padding: '16px', marginBottom: '16px' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: currentUser.avatar,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: '700',
          fontSize: '18px',
          flexShrink: 0,
        }}>
          {currentUser.name.charAt(0)}
        </div>
        <form onSubmit={handleSubmit} style={{ flex: 1 }}>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            onFocus={() => setFocused(true)}
            placeholder={`What's on your mind, ${currentUser.name.split(' ')[0]}?`}
            rows={focused ? 4 : 2}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '20px',
              border: '1px solid #ccd0d5',
              backgroundColor: '#f0f2f5',
              fontSize: '15px',
              color: '#1c1e21',
              resize: 'none',
              transition: 'all 0.2s',
              fontFamily: 'inherit',
            }}
          />
          {focused && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    color: '#65676b',
                    backgroundColor: '#f0f2f5',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '600',
                  }}
                >
                  📷 Photo
                </button>
                <button
                  type="button"
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    color: '#65676b',
                    backgroundColor: '#f0f2f5',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '600',
                  }}
                >
                  😊 Feeling
                </button>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => { setFocused(false); setContent(''); }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#65676b',
                    backgroundColor: '#e4e6eb',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!content.trim()}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#ffffff',
                    backgroundColor: content.trim() ? '#1877f2' : '#bcc0c4',
                    border: 'none',
                    cursor: content.trim() ? 'pointer' : 'not-allowed',
                    transition: 'background-color 0.2s',
                  }}
                >
                  Post
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

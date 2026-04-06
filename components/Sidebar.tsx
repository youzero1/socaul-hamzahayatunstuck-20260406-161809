'use client';

import Link from 'next/link';
import { currentUser } from '@/lib/data';

const suggestedFriends = [
  { id: 'sf-1', name: 'Chris Park', avatar: '#7c3aed', mutualFriends: 12 },
  { id: 'sf-2', name: 'Lisa Turner', avatar: '#db2777', mutualFriends: 8 },
  { id: 'sf-3', name: 'David Kim', avatar: '#059669', mutualFriends: 5 },
];

const trendingTopics = [
  { id: 'tt-1', tag: '#NextJS', posts: '2.4K posts' },
  { id: 'tt-2', tag: '#WebDev', posts: '18.9K posts' },
  { id: 'tt-3', tag: '#ReactJS', posts: '12.1K posts' },
  { id: 'tt-4', tag: '#TypeScript', posts: '9.8K posts' },
  { id: 'tt-5', tag: '#OpenSource', posts: '7.2K posts' },
];

export default function Sidebar() {
  return (
    <aside style={{ width: '280px', flexShrink: 0 }}>
      <div className="card" style={{ padding: '16px', marginBottom: '16px' }}>
        <Link href="/profile" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '16px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: currentUser.avatar,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '22px',
          }}>
            {currentUser.name.charAt(0)}
          </div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '16px', color: '#1c1e21' }}>{currentUser.name}</div>
            <div style={{ fontSize: '13px', color: '#65676b' }}>View your profile</div>
          </div>
        </Link>
        <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid #e4e6eb', paddingTop: '12px' }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '18px', fontWeight: '700', color: '#1c1e21' }}>3</div>
            <div style={{ fontSize: '12px', color: '#65676b' }}>Posts</div>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '18px', fontWeight: '700', color: '#1c1e21' }}>248</div>
            <div style={{ fontSize: '12px', color: '#65676b' }}>Friends</div>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '18px', fontWeight: '700', color: '#1c1e21' }}>1.2K</div>
            <div style={{ fontSize: '12px', color: '#65676b' }}>Likes</div>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: '16px', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: '#1c1e21' }}>People You May Know</h3>
        {suggestedFriends.map(friend => (
          <div key={friend.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: friend.avatar,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '16px',
              flexShrink: 0,
            }}>
              {friend.name.charAt(0)}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: '600', fontSize: '14px', color: '#1c1e21' }}>{friend.name}</div>
              <div style={{ fontSize: '12px', color: '#65676b' }}>{friend.mutualFriends} mutual friends</div>
            </div>
            <button style={{
              padding: '6px 12px',
              borderRadius: '6px',
              backgroundColor: '#e7f0fd',
              color: '#1877f2',
              fontWeight: '600',
              fontSize: '13px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
              + Add
            </button>
          </div>
        ))}
      </div>

      <div className="card" style={{ padding: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: '#1c1e21' }}>Trending</h3>
        {trendingTopics.map(topic => (
          <div key={topic.id} style={{
            padding: '8px 0',
            borderBottom: '1px solid #f0f2f5',
            cursor: 'pointer',
          }}>
            <div style={{ fontWeight: '600', fontSize: '14px', color: '#1877f2' }}>{topic.tag}</div>
            <div style={{ fontSize: '12px', color: '#65676b' }}>{topic.posts}</div>
          </div>
        ))}
      </div>
    </aside>
  );
}

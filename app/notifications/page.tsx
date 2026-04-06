'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { initialNotifications } from '@/lib/data';
import type { Notification } from '@/lib/types';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const markRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Header />
      <div className="container" style={{ paddingTop: '20px' }}>
        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h1 style={{ fontSize: '22px', fontWeight: '700' }}>
              Notifications {unreadCount > 0 && <span style={{ fontSize: '14px', color: '#1877f2', fontWeight: '600' }}>({unreadCount} new)</span>}
            </h1>
            {unreadCount > 0 && (
              <button className="btn btn-secondary" onClick={markAllRead} style={{ fontSize: '13px' }}>
                Mark all as read
              </button>
            )}
          </div>
          {notifications.length === 0 ? (
            <p style={{ color: '#65676b', textAlign: 'center', padding: '40px 0' }}>No notifications yet</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {notifications.map(notification => (
                <div
                  key={notification.id}
                  onClick={() => markRead(notification.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: notification.read ? 'transparent' : '#e7f0fd',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: notification.type === 'like' ? '#fa3e3e' : notification.type === 'comment' ? '#1877f2' : '#42b72a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}>
                    {notification.type === 'like' ? '❤️' : notification.type === 'comment' ? '💬' : '👤'}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '14px', color: '#1c1e21' }}>
                      <strong>{notification.fromUser}</strong> {notification.message}
                    </p>
                    <p style={{ fontSize: '12px', color: '#65676b', marginTop: '4px' }}>{notification.time}</p>
                  </div>
                  {!notification.read && (
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#1877f2',
                      flexShrink: 0,
                      marginTop: '4px',
                    }} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

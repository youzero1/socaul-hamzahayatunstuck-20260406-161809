'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { initialNotifications } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();
  const unreadCount = initialNotifications.filter(n => !n.read).length;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 16px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div style={{
            width: '36px',
            height: '36px',
            backgroundColor: '#1877f2',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '18px',
          }}>S</div>
          <span style={{ fontSize: '20px', fontWeight: '700', color: '#1877f2' }}>SocialApp</span>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link
            href="/"
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '14px',
              color: pathname === '/' ? '#1877f2' : '#65676b',
              backgroundColor: pathname === '/' ? '#e7f0fd' : 'transparent',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
          >
            🏠 Home
          </Link>
          <Link
            href="/profile"
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '14px',
              color: pathname === '/profile' ? '#1877f2' : '#65676b',
              backgroundColor: pathname === '/profile' ? '#e7f0fd' : 'transparent',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
          >
            👤 Profile
          </Link>
          <Link
            href="/notifications"
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '14px',
              color: pathname === '/notifications' ? '#1877f2' : '#65676b',
              backgroundColor: pathname === '/notifications' ? '#e7f0fd' : 'transparent',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
              position: 'relative',
            }}
          >
            🔔 Notifications
            {unreadCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '4px',
                right: '8px',
                backgroundColor: '#fa3e3e',
                color: '#ffffff',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '11px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {unreadCount}
              </span>
            )}
          </Link>
        </nav>

        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#4f46e5',
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: 'none',
            }}
          >
            A
          </button>
          {menuOpen && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '44px',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              padding: '8px',
              minWidth: '180px',
              zIndex: 200,
            }}>
              <div style={{ padding: '8px 12px', borderBottom: '1px solid #e4e6eb', marginBottom: '4px' }}>
                <div style={{ fontWeight: '600', fontSize: '14px' }}>Alex Johnson</div>
                <div style={{ fontSize: '12px', color: '#65676b' }}>@alexjohnson</div>
              </div>
              <Link href="/profile" onClick={() => setMenuOpen(false)} style={{
                display: 'block',
                padding: '8px 12px',
                borderRadius: '6px',
                fontSize: '14px',
                color: '#1c1e21',
                textDecoration: 'none',
              }}>View Profile</Link>
              <Link href="/notifications" onClick={() => setMenuOpen(false)} style={{
                display: 'block',
                padding: '8px 12px',
                borderRadius: '6px',
                fontSize: '14px',
                color: '#1c1e21',
                textDecoration: 'none',
              }}>Notifications</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

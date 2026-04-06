import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SocialApp',
  description: 'A social media app with posts, likes, comments, and notifications',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

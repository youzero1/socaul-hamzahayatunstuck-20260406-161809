import Feed from '@/components/Feed';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Header />
      <div style={{
        display: 'flex',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px 16px',
        gap: '24px',
      }}>
        <Sidebar />
        <main style={{ flex: 1, minWidth: 0 }}>
          <Feed />
        </main>
      </div>
    </div>
  );
}

import React from "react";

export default function AuthCard({ children, title, small, titleStyle }: { children: React.ReactNode; title?: string; small?: boolean; titleStyle?: React.CSSProperties }) {
  if (small) {
    return (
      <div className="auth-card-small" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '1rem',
        backgroundColor: 'var(--bg)'
      }}>
        <div style={{
          backgroundColor: 'var(--mantle)',
          borderRadius: '14px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          padding: '2rem',
          maxWidth: '400px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {title && <h2 className="auth-title" style={{ margin: 0, fontWeight: 600, fontSize: '1.75rem', color: '#222', textAlign: 'center', ...titleStyle }}>{title}</h2>}
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="auth-card" style={{ display: 'flex', height: '100vh' }}>
      <div className="visual-section" style={{ flex: 1, display: 'flex' }}>
        <div
          className="auth-card-visual"
          style={{
            flex: 1,
            backgroundColor: '#f5f7fa',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
          }}
        >
          <h1 className="brand" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Stellar</h1>
          <p className="tag" style={{ fontSize: '1.125rem', color: '#555' }}>Простой SaaS — демо авторизации</p>
        </div>
      </div>

      <div className="form-section" style={{ flex: 1, display: 'flex' }}>
        <div
          className="auth-card-form"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '3rem 4rem',
            maxWidth: '480px',
            margin: 'auto',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
          }}
        >
          {title && <h2 className="auth-title" style={{ marginBottom: '1.5rem', fontWeight: 600, fontSize: '1.75rem', color: '#222' }}>{title}</h2>}
          {children}
        </div>
      </div>
    </div>
  );
}

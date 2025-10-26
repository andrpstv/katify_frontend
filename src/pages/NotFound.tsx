import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      color: 'var(--text)',
      textAlign: 'center'
    }}>
      <div style={{
        background: 'var(--mantle)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '3rem',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        border: '1px solid var(--surface0)'
      }}>
        <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0', color: 'var(--mauve)' }}>404</h1>
        <h2 style={{ fontSize: '2rem', margin: '0 0 1rem 0', fontWeight: 600 }}>ой... кажется вы заблудились 😅</h2>
        <p style={{ fontSize: '1.125rem', margin: '0 0 2rem 0', color: 'var(--subtext0)' }}>
          Страница, которую вы ищете, не существует. Возможно, вы ввели неправильный адрес или страница была перемещена.
        </p>
        <Link
          to="/auth"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, var(--mauve), var(--blue))',
            color: 'var(--crust)',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '16px',
            boxShadow: '0 4px 15px rgba(202, 158, 230, 0.2)',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}

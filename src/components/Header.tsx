import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      background: 'var(--mantle)',
      borderBottom: '1px solid var(--surface0)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--mauve)' }}>
        Katify.com
      </div>
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: '8px',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface0)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--accent1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--crust)',
            fontWeight: 'bold'
          }}>
            {user?.fullname?.charAt(0).toUpperCase() || 'U'}
          </div>
          <span>{user?.fullname || 'User'}</span>
        </button>
        {dropdownOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            background: 'var(--mantle)',
            border: '1px solid var(--surface0)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            minWidth: '200px',
            zIndex: 20
          }}>
            <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--surface0)', color: 'var(--subtext0)' }}>
              @{user?.username || 'username'}
            </div>
            <button style={{
              width: '100%',
              padding: '12px 16px',
              background: 'transparent',
              border: 'none',
              color: 'var(--text)',
              textAlign: 'left',
              cursor: 'pointer'
            }}>
              Настройки
            </button>
            <button
              onClick={logout}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'transparent',
                border: 'none',
                color: 'var(--red)',
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              Выйти
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

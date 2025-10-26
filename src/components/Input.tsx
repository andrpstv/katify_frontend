import React, { useState } from "react";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

export default function Input({ label, type = "text", value, onChange, required, placeholder }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div>
      <label className="input-label">{label}</label>
      <div style={{ position: 'relative' }}>
        <input
          className="input-field"
          type={inputType}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text)',
              fontSize: '16px',
            }}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>
    </div>
  );
}

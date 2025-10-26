import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import Input from "../components/Input";
import { useAuth } from "../context/AuthContext";

export default function Auth() {
  // Service name: otcheter
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login, register } = useAuth();
  const nav = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register({ email, username: username || "", password, fullname });
      }
      nav("/dashboard");
    } catch (err: any) {
      let errorMsg = err?.response?.data?.error || err.message || (isLogin ? "Login failed" : "Registration failed");

      // Map backend errors to user-friendly Russian messages
      if (errorMsg.includes("duplicate key value violates unique constraint \"users_pkey\"")) {
        errorMsg = "Пользователь с таким email уже существует";
      } else if (errorMsg.includes("duplicate key value violates unique constraint \"users_username_key\"")) {
        errorMsg = "Пользователь с таким именем уже существует";
      } else if (errorMsg.includes("user not found")) {
        errorMsg = "Пользователь не найден, пожалуйста, зарегистрируйтесь";
      } else if (errorMsg.includes("failed to create newUser")) {
        errorMsg = "Ошибка при создании пользователя";
      } else if (errorMsg.includes("Login failed") || errorMsg.includes("Registration failed")) {
        errorMsg = "Произошла ошибка при " + (isLogin ? "входе" : "регистрации");
      }

      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard title={isLogin ? "Войти" : "Создать аккаунт"} small titleStyle={{ color: 'var(--text)', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
      <form onSubmit={onSubmit} className="form" style={{ color: 'var(--text)' }}>
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        {!isLogin && (
          <>
            <Input label="Имя пользователя" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input label="Полное имя" type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
          </>
        )}
        <Input label="Пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <div className="error">{error}</div>}
        <button className="btn" type="submit" disabled={loading} style={{ background: 'var(--accent1)', color: 'var(--crust)', fontWeight: 'bold', textShadow: '0 1px 2px rgba(0,0,0,0.3)', border: 'none', boxShadow: '0 4px 15px rgba(203, 166, 247, 0.4)' }}>
          {loading ? (isLogin ? "Входим..." : "Регистрируем...") : (isLogin ? "Войти" : "Зарегистрироваться")}
        </button>
        <div className="muted" style={{ textAlign: 'center', color: 'var(--subtext0)' }}>
          {isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"} <button type="button" onClick={() => setIsLogin(!isLogin)} className="btn ghost" style={{ display: 'inline-block', width: 'auto', marginTop: 0, padding: '6px 12px', fontSize: '14px', color: 'var(--blue)', backgroundColor: 'rgba(203, 166, 247, 0.2)', borderColor: 'var(--blue)', borderWidth: '2px', fontWeight: 'bold' }}>{isLogin ? "Зарегистрироваться" : "Войти"}</button>
        </div>
      </form>
    </AuthCard>
  );
}

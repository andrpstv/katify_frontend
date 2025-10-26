import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import Input from "../components/Input";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register } = useAuth();
  const nav = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await register({ email, username, password, fullname });
      nav("/dashboard");
    } catch (err: any) {
      setError(err?.response?.data?.error || err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard title="Создать аккаунт" small>
      <form onSubmit={submit} className="form">
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input label="Имя пользователя" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input label="Полное имя" type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        <Input label="Пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <div className="error">{error}</div>}
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Регистрируем..." : "Зарегистрироваться"}
        </button>
        <div className="muted">
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </div>
      </form>
    </AuthCard>
  );
}
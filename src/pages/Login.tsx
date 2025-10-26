import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthCard from "../components/AuthCard";
import Input from "../components/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string|null>(null);
  const { login } = useAuth();
  const nav = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    try {
      await login(email, password);
      nav("/dashboard");
    } catch (e:any) {
      setErr(e?.response?.data?.error || e.message || "Login failed");
    }
  };

  return (
    <AuthCard title="Войти" small>
      <form onSubmit={onSubmit} className="form">
        <Input label="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <Input label="Пароль" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        {err && <div className="error">{err}</div>}
        <button className="btn" type="submit">Войти</button>
      </form>
    </AuthCard>
  );
}
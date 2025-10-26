import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios";
import type { AuthResponse, User } from "../types/auth";

type AuthCtx = {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (payload: { email: string; username: string; password: string; fullname?: string }) => Promise<void>;
  logout: () => void;
};

const Ctx = createContext<AuthCtx | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("access_token"));
  const [user, setUser] = useState<User | null>(() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  });

  useEffect(() => {
    if (token) localStorage.setItem("access_token", token);
    else localStorage.removeItem("access_token");
  }, [token]);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  async function login(email: string, password: string) {
    try {
      const res = await api.post<AuthResponse>("/auth/login", { email, password });
      if (!res.data?.access_token) throw new Error("no token");
      setToken(res.data.access_token);
      await fetchUser();
    } catch (err: any) {
      if (!err.response) {
        throw new Error("Сервис проводит технические работы, подробнее узнать @andrpstv");
      }
      throw err;
    }
  }

  async function register(payload: { email: string; username: string; password: string; fullname?: string }) {
    try {
      await api.post("/auth/register", { email: payload.email, username: payload.username, password: payload.password, fullname: payload.fullname });
      setUser({ email: payload.email, username: payload.username || "", fullname: payload.fullname || "" });
      // auto-login
      await login(payload.email, payload.password);
    } catch (err: any) {
      if (!err.response) {
        throw new Error("Сервис проводит технические работы, подробнее узнать @andrpstv");
      }
      throw err;
    }
  }

  async function fetchUser() {
    try {
      const res = await api.get("/auth/me"); // Assume endpoint exists
      setUser(res.data);
    } catch (err: any) {
      if (!err.response) {
        // Network error, but since login succeeded, maybe ignore or set user from local
        // For now, do nothing
      }
    }
  }

  function logout() {
    setToken(null);
    setUser(null);
  }

  return <Ctx.Provider value={{ token, user, login, register, logout }}>{children}</Ctx.Provider>;
};
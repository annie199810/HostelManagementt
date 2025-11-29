
import React, { createContext, useContext, useEffect, useState } from "react";
import * as api from "../api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [loading, setLoading] = useState(Boolean(token));

  useEffect(() => {
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    let mounted = true;
    setLoading(true);
    api
      .apiMe(token)
      .then((res) => {
        if (!mounted) return;
        setUser(res.user || null);
      })
      .catch((err) => {
        console.warn("auth me failed", err);
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [token]);

  async function register({ name, email, password, role }) {
    const res = await api.apiRegister({ name, email, password, role });
    if (res.token) {
      localStorage.setItem("token", res.token);
      setToken(res.token);
      setUser(res.user || null);
    }
    return res;
  }

  async function login({ email, password }) {
    const res = await api.apiLogin({ email, password });
    if (res.token) {
      localStorage.setItem("token", res.token);
      setToken(res.token);
      setUser(res.user || null);
    }
    return res;
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, token, loading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

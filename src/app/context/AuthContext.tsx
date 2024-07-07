"use client";

import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useCookie } from "../utils/cookie";

interface AuthContextProps {
  jwt: string | null;
  refresh: string | null;
  login: (jwt: string, refresh: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  jwt: "",
  refresh: "",
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [jwt, setJwt] = useState<string>("");
  const [refresh, setRefresh] = useState<string>("");
  const cookie = useCookie();

  const login = (newToken: string, newRefresh: string) => {
    setJwt(newToken);
    setRefresh(newRefresh);

    cookie.setCookie("Authorization", newToken);
    cookie.setCookie("RefreshToken", newRefresh);
  };

  const logout = () => {
    setJwt("");
    setRefresh("");

    cookie.removeCookie("Authorization");
    cookie.removeCookie("RefreshToken");
  };

  return (
    <AuthContext.Provider value={{ jwt, refresh, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

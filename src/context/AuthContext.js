import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (username) => {
    // Load user details from localStorage
    const details = JSON.parse(
      localStorage.getItem(`user_details_${username}`)
    );
    if (details) {
      setUser(details);
      localStorage.setItem("user", JSON.stringify(details));
    } else {
      setUser({ username });
      localStorage.setItem("user", JSON.stringify({ username }));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: string | null;
  setUser: (user: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(() => {
    // Load user from local storage on initial render
    return localStorage.getItem('user');
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', user);
    } else {
      localStorage.removeItem('user');
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() =>{
    const storedAuthState = sessionStorage.getItem('isAuthenticated');
    if (storedAuthState){
      setIsAuthenticated(JSON.parse(storedAuthState));
    }
  },[]);

  const login = async () => {
    
    setIsAuthenticated(true);
    sessionStorage.setItem('isAuthenticated',true);
  };

  const logout = async () => {
    
    setIsAuthenticated(false);

  sessionStorage.removeItem('isAuthenticated');
  };

  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import React, { useState, useContext, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAuthContext;
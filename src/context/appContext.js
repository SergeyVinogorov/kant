import React from 'react';
import { AuthProvider } from './authContext';
import { RecordProvider } from './recordContext';


export const AppContextProvider = ({ children }) => {
  return (
    <AuthProvider>
			<RecordProvider>
					{children}
			</RecordProvider>
    </AuthProvider>
  );
};
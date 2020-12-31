import React, { useState, useContext, createContext } from 'react';

export const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
  const [recordPage, setRecordPage] = useState(null);

  return (
    <RecordContext.Provider value={{ recordPage, setRecordPage }}>
      {children}
    </RecordContext.Provider>
  );
};

export function useRecordContext() {
  const context = useContext(RecordContext);

  if (!context) {
    console.error('Error deploying Record Context!!!');
  }

  return context;
}

export default useRecordContext;
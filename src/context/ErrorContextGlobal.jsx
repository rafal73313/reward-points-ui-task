import { createContext, useCallback, useState } from 'react';

export const ErrorContextGlobal = createContext();

export const ErrorContextGlobalProvider = ({ children }) => {
  const [hasErrorGlobal, setHasErrorGlobal] = useState(false);
  const [errorGlobal, setErrorGlobalInner] = useState(null);
  const [transactionsFetchUrl, setTransactionsFetchUrl] = useState(null);

  const setErrorGlobal = useCallback((error) => {
    setHasErrorGlobal(true);
    const errorNewMessage = Object.assign({}, error, {
      message: `${error?.message || 'error occurred'} - [${new Date().toLocaleString()}]`
    });
    setErrorGlobalInner(errorNewMessage);
  }, []);

  const clearErrorGlobal = useCallback(() => {
    setHasErrorGlobal(false);
    setErrorGlobalInner(null);
  }, []);

  return (
    <ErrorContextGlobal.Provider
      value={{
        hasErrorGlobal,
        errorGlobal,
        setErrorGlobal,
        clearErrorGlobal,
        transactionsFetchUrl,
        setTransactionsFetchUrl
      }}
    >
      {children}
    </ErrorContextGlobal.Provider>
  );
};

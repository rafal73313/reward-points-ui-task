import { useState, useEffect, useCallback, useContext } from 'react';
import { TRANSACTION_DATA_API_URL } from '../utils/apis';
import { simulateServerWaitTime } from '../utils/simulateServerWaitTime';
import { extractExactMonthsFromDataset } from '../utils/extractExactMonthsFromDataset';
import { ErrorContextGlobal } from '../context/ErrorContextGlobal';

export const FETCH_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
};

export const useFetchTransactionData = () => {
  const { setErrorGlobal, clearErrorGlobal, transactionsFetchUrl } = useContext(ErrorContextGlobal);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(FETCH_STATUS.IDLE);

  const clearError = useCallback(() => {
    setError(null);
    clearErrorGlobal();
  }, [setError, clearErrorGlobal]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus(FETCH_STATUS.LOADING);
      setError(null);

      await simulateServerWaitTime(2000);

      try {
        const response = await fetch(transactionsFetchUrl || TRANSACTION_DATA_API_URL);
        const results = await response.json();
        if (results) {
          setStatus(FETCH_STATUS.SUCCESS);
          setData({
            months: extractExactMonthsFromDataset(results.data),
            transactions: results.data
          });
        } else {
          throw new Error('No data found');
        }
      } catch (e) {
        const fetchError = new Error('failed to fetch data');
        setError(fetchError);
        setErrorGlobal(fetchError);
        setStatus(FETCH_STATUS.ERROR);
      }
    };
    fetchData();
  }, [transactionsFetchUrl]);

  return [data, status, error, clearError];
};

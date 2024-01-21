import { useCallback, useContext, useMemo } from 'react';
import { ErrorContextGlobal } from '../../context/ErrorContextGlobal';
import { TRANSACTION_DATA_API_URL } from '../../utils/apis';

export const SimulateFetchError = () => {
  const { transactionsFetchUrl, setTransactionsFetchUrl } = useContext(ErrorContextGlobal);

  const fetchFromGoodUrl = useCallback(() => {
    setTransactionsFetchUrl(null);
  }, [setTransactionsFetchUrl]);

  const fetchFromBadUrl = useCallback(() => {
    setTransactionsFetchUrl(`${TRANSACTION_DATA_API_URL}_BAD_URL`);
  }, [setTransactionsFetchUrl]);

  const buttonDisabled = useMemo(
    () => transactionsFetchUrl && transactionsFetchUrl.length > 0,
    [transactionsFetchUrl]
  );

  return (
    <>
      <button onClick={fetchFromGoodUrl} disabled={!buttonDisabled}>
        fetch from a VALID URL
      </button>
      <button onClick={fetchFromBadUrl} disabled={buttonDisabled}>
        fetch from an INVALID URL
      </button>
    </>
  );
};

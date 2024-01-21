import { memo, useMemo, useState } from 'react';
import { FETCH_STATUS } from '../../hooks/useFetchTransactionData';
import { mergeAllTransactionsPerUser } from '../../utils/mergeAllTransactionsPerUser';
import { BodyRows } from './TableParts/BodyRows';

import { PAGINATION_OPTIONS, FooterWithPagination } from './TableParts/FooterWithPagination';
import { HeaderRow } from './TableParts/HeaderRow';
import { BodyRowsMessage } from './TableParts/BodyRowsMessage';

import './RewardPointsTable.scss';
import { SimulateAppError } from '../SimulateAppError/SimulateAppError';
import { SimulateFetchError } from '../SimulateFetchError/SimulateFetchError';

export const RewardPointsTable = memo(({ data, status }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNumberOfUsers, setTotalNumberOfUsers] = useState(0);
  const [availableMonths, setAvailableMonths] = useState([]);
  const [userRowsPerPage, setUserRowsPerPage] = useState(PAGINATION_OPTIONS[0]);

  const [simulatedError, setSimulatedError] = useState(false);

  const dataPerUserRows = useMemo(() => {
    if (status !== FETCH_STATUS.SUCCESS) return [];
    setAvailableMonths(data.months);
    const dataRows = mergeAllTransactionsPerUser(data.transactions);
    setTotalNumberOfUsers(dataRows.length);
    return dataRows;
  }, [data, status]);

  const rowsForCurrentPage = useMemo(() => {
    if (dataPerUserRows && dataPerUserRows.length > 0) {
      return dataPerUserRows.slice(
        (currentPage - 1) * userRowsPerPage,
        (currentPage - 1) * userRowsPerPage + userRowsPerPage
      );
    }
    return [];
  }, [dataPerUserRows, currentPage, userRowsPerPage]);

  const paginationDisabled = useMemo(() => status !== FETCH_STATUS.SUCCESS, [status]);

  const isSuccess = useMemo(() => status === FETCH_STATUS.SUCCESS, [status]);

  if (simulatedError) {
    throw new Error('simulated App error');
  }

  return (
    <>
      <table className="reward-points-table">
        <caption>Reward Points Per User</caption>
        {isSuccess && totalNumberOfUsers ? (
          <>
            <HeaderRow availableMonths={availableMonths} />
            <BodyRows
              dataPerUser={rowsForCurrentPage}
              status={status}
              currentPage={currentPage}
              userRowsPerPage={userRowsPerPage}
              availableMonths={availableMonths}
            />
          </>
        ) : (
          <BodyRowsMessage status={status} />
        )}
        <FooterWithPagination
          disabled={paginationDisabled}
          totalItems={totalNumberOfUsers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          userRowsPerPage={userRowsPerPage}
          setUserRowsPerPage={setUserRowsPerPage}
        />
      </table>
      <div className="simulate-errors">
        <SimulateAppError triggerError={setSimulatedError} />
        <SimulateFetchError />
      </div>
    </>
  );
});
RewardPointsTable.displayName = 'RewardPointsTable';

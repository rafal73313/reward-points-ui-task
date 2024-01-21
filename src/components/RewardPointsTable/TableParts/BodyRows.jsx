import { useMemo } from 'react';
import { FETCH_STATUS } from '../../../hooks/useFetchTransactionData';

export const BodyRows = ({
  dataPerUser,
  status,
  currentPage,
  userRowsPerPage,
  availableMonths
}) => {
  const isSuccess = useMemo(() => status === FETCH_STATUS.SUCCESS, [status]);

  const rowNoOffset = useMemo(
    () => (currentPage - 1) * userRowsPerPage,
    [currentPage, userRowsPerPage]
  );

  return (
    <tbody>
      {isSuccess &&
        dataPerUser.map((item, index) => {
          const { email, pointsTotal, pointsEachMonth, noTransactions } = item;
          return (
            <tr key={email}>
              <td>{rowNoOffset + index + 1}</td>
              <td>{email}</td>
              <td>{noTransactions}</td>
              {availableMonths.map((month) => {
                return <td key={month}>{pointsEachMonth[month] || 0}</td>;
              })}
              <td>{pointsTotal}</td>
            </tr>
          );
        })}
    </tbody>
  );
};

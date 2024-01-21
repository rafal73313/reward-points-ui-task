import React, { useContext } from 'react';
import { RewardPointsTable } from './RewardPointsTable/RewardPointsTable';

import { ErrorBoxGlobal } from './ErrorBoxGlobal/ErrorBoxGlobal';
import { useFetchTransactionData } from '../hooks/useFetchTransactionData';

import './App.scss';
import { ErrorBoundaryGlobal } from './ErrorBoundaryGlobal/ErrorBoundaryGlobal';
import { ErrorContextGlobal } from '../context/ErrorContextGlobal';

export const App = () => {
  const { hasErrorGlobal, setErrorGlobal, clearErrorGlobal } = useContext(ErrorContextGlobal);
  const [data, status, , clearError] = useFetchTransactionData();

  return (
    <>
      <h2>Customer Reward Points by Charter</h2>
      <ErrorBoundaryGlobal clearErrorGlobal={clearErrorGlobal} setErrorGlobal={setErrorGlobal}>
        {hasErrorGlobal && <ErrorBoxGlobal clearError={clearError} />}
        <RewardPointsTable data={data} status={status} />
      </ErrorBoundaryGlobal>
    </>
  );
};

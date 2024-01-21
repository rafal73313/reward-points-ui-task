import { memo, useCallback, useContext } from 'react';
import './ErrorBox.scss';
import { ErrorContextGlobal } from '../../context/ErrorContextGlobal';

export const ErrorBoxGlobal = memo(({ error, clearError }) => {
  const { errorGlobal, clearErrorGlobal } = useContext(ErrorContextGlobal);

  const { message } = error || errorGlobal || {};

  const clearErrorHandler = useCallback(() => {
    if (clearError && typeof clearError === 'function') {
      clearError();
    }
    clearErrorGlobal();
  }, [clearError, clearErrorGlobal]);

  return (
    <div className="error-box">
      <div className="error-box__message">
        <span>error:</span>
        {message}
      </div>
      <button className="error-box__button" onClick={clearErrorHandler}>
        X
      </button>
    </div>
  );
});

ErrorBoxGlobal.displayName = 'ErrorBox';

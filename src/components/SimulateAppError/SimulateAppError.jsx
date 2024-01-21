import { useCallback } from 'react';

import './SimulateAppError.scss';

export const SimulateAppError = ({ triggerError }) => {
  const handleClick = useCallback(() => {
    triggerError(true);
  }, [triggerError]);

  return (
    <button className="simulate-error-btn" onClick={handleClick}>
      click here to simulate an app error
    </button>
  );
};

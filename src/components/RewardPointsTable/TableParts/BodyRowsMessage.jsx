import { FETCH_STATUS } from '../../../hooks/useFetchTransactionData';
import { SpinnerLoader } from '../../SpinnerLoader/SpinnerLoader';

import './BodyRowsMessage.scss';

const NO_DATA_MESSAGE = 'No data to display, empty dataset...';
const NO_DATA_MESSAGE_LOADING = 'Loading...';
const NO_DATA_MESSAGE_ERROR = 'Error, no data to display...';

const RowMessage = ({ message, showSpinner }) => (
  <tbody>
    <tr>
      <td colSpan="6">
        <div className="body-rows-message">
          <span>{message}</span>
          <span>{showSpinner && <SpinnerLoader />}</span>
        </div>
      </td>
    </tr>
  </tbody>
);

export const BodyRowsMessage = ({ status }) => {
  switch (status) {
    case FETCH_STATUS.ERROR:
      return <RowMessage message={NO_DATA_MESSAGE_ERROR} />;
    case FETCH_STATUS.LOADING:
      return <RowMessage message={NO_DATA_MESSAGE_LOADING} showSpinner />;
    default:
      return <RowMessage message={NO_DATA_MESSAGE} />;
  }
};

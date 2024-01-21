import { PAGINATION_OPTIONS } from '../TableParts/FooterWithPagination';

export const RowsPerPageSelector = ({
  totalItems,
  userRowsPerPage,
  handleSelectChange,
  disabled
}) => (
  <div>
    <span>total: {totalItems} | </span>
    <span>rows per page: </span>
    <select disabled={disabled} value={userRowsPerPage} onChange={handleSelectChange}>
      <option value={PAGINATION_OPTIONS[0]}>{PAGINATION_OPTIONS[0]}</option>
      <option value={PAGINATION_OPTIONS[1]}>{PAGINATION_OPTIONS[1]}</option>
      <option value={PAGINATION_OPTIONS[2]}>{PAGINATION_OPTIONS[2]}</option>
    </select>
  </div>
);

import { useCallback } from 'react';
import { TablePagination } from '../TablePagination/TablePagination';
import { RowsPerPageSelector } from '../RowsPerPageSelector/RowsPerPageSelector';

import './FooterWithPagination.scss';

export const PAGINATION_OPTIONS = [10, 25, 50];

export const FooterWithPagination = ({
  totalItems,
  currentPage,
  setCurrentPage,
  userRowsPerPage,
  setUserRowsPerPage,
  disabled
}) => {
  const handleSelectChange = useCallback(
    (e) => {
      const valueParsed = parseInt(e.target.value, 10);
      setCurrentPage(1);
      setUserRowsPerPage(valueParsed);
    },
    [setCurrentPage, setUserRowsPerPage]
  );

  return (
    <tfoot>
      <tr>
        <td colSpan="7">
          <div className="table-footer-with-pagination">
            <RowsPerPageSelector
              disabled={disabled}
              userRowsPerPage={userRowsPerPage}
              handleSelectChange={handleSelectChange}
              totalItems={totalItems}
            />
            <TablePagination
              disabled={disabled}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalItems={totalItems}
              userRowsPerPage={userRowsPerPage}
            />
          </div>
        </td>
      </tr>
    </tfoot>
  );
};

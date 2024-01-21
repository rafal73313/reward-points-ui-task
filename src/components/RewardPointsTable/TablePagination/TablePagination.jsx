import './TablePagination.scss';

export const TablePagination = ({
  disabled,
  currentPage,
  setCurrentPage,
  totalItems,
  userRowsPerPage
}) => (
  <div className="table-pagination">
    <button
      disabled={disabled || currentPage === 1}
      onClick={() => setCurrentPage((prev) => prev - 1)}
    >
      prev
    </button>
    <span>
      {currentPage} of {Math.ceil(totalItems / userRowsPerPage)}
    </span>
    <button
      disabled={disabled || currentPage === Math.ceil(totalItems / userRowsPerPage)}
      onClick={() => setCurrentPage((prev) => prev + 1)}
    >
      next
    </button>
  </div>
);

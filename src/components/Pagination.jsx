const Pagination = ({
  rowsPerPage,
  totalRows,
  currentPage,
  setCurrentPage,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pages.push(i);
  }

  const onClickPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const onClickNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="flex flex-wrap justify-end items-center gap-2 py-4">
      <button
        type="button"
        onClick={onClickPrevious}
        disabled={currentPage === 1}
        className="rounded-md border border-blue-300 bg-white px-3 py-2 text-sm font-medium text-blue-700 shadow-sm transition-colors hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>
      {pages.map((page, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`min-w-10 rounded-md border px-3 py-2 text-sm font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
              currentPage === page
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-blue-300 bg-white text-blue-700 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {page}
          </button>
        );
      })}
      <button
        type="button"
        onClick={onClickNext}
        disabled={pages.length === 0 || currentPage === pages.length}
        className="rounded-md border border-blue-300 bg-white px-3 py-2 text-sm font-medium text-blue-700 shadow-sm transition-colors hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;

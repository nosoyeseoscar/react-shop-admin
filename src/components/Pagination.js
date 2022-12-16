export default function Pagination({ offset, setOffset, totalProducts, currentPage, setCurrentPage }) {
  const maxPages = totalProducts / 5;
  const handlePrev = () => {
    if (offset > 5) setOffset(offset - 5);
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < maxPages) {
      setOffset(offset + 5);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between">
        <button onClick={handlePrev} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Previous
        </button>
        <div className="flex items-center justify-between">Current Page:{currentPage}</div>
        <div className="flex items-center justify-between">Total products:{totalProducts}</div>
        <div className="flex items-center justify-between">Total Pages:{maxPages}</div>

        <button onClick={handleNext} className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
  );
}

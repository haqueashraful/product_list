import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);


  return (
    <div className="flex space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg border bg-white text-blue-600 border-blue-200 hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </button>
      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            currentPage === i + 1
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-blue-600 border-blue-200"
          } hover:bg-blue-700 hover:text-white`}
        >
          {i + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg border bg-white text-blue-600 border-blue-200 hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

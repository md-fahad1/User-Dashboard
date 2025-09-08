"use client";

import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = [];

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-end mt-6 gap-2">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className={`px-3 py-1 rounded-md ${
          currentPage === 1
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-300"
        }`}
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-md ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-300"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

"use client";
import React from "react";

const DataTable = ({ columns,  data = [], renderCell }) => {
  console.log("renderCell",columns,renderCell)
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden mt-4">
      <table className="min-w-full">
        <thead className="bg-gray-300 border-b">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-6 py-3 text-sm font-medium text-gray-800 uppercase text-${col.align || "left"}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((row, rowIndex) => (
            <tr
              key={row.id || rowIndex}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`px-6 py-4 text-gray-700 text-sm text-${col.align || "left"}`}
                >
                  {renderCell ? renderCell(row, col.key) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

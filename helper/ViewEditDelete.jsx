import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const ViewEditDelete = ({ onView, onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* View */}
      <button
        onClick={onView}
        className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
      >
        <FaEye />
      </button>

      {/* Edit */}
      <button
        onClick={onEdit}
        className="p-2 rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition-colors"
      >
        <FaEdit />
      </button>

      {/* Delete */}
      <button
        onClick={onDelete}
        className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default ViewEditDelete;

"use client";

import React from "react";
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";

// Sample feedback data
const feedbacks = [
  {
    id: "FB001",
    name: "John Doe",
    email: "john@example.com",
    feedback: "Great service, very satisfied!",
    rating: 5,
    date: "2025-09-01",
    status: "Approved",
  },
  {
    id: "FB002",
    name: "Jane Smith",
    email: "jane@example.com",
    feedback: "Product quality could be better.",
    rating: 3,
    date: "2025-09-03",
    status: "Pending",
  },
  {
    id: "FB003",
    name: "Mike Johnson",
    email: "mike@example.com",
    feedback: "Excellent support and delivery!",
    rating: 4,
    date: "2025-09-05",
    status: "Rejected",
  },
];

const ReviewFeedbackPage = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Reviews & Feedback</h1>
        <p className="text-gray-600">Manage user feedback and reviews</p>
      </div>

      {/* Feedback Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                User Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Feedback
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {feedbacks.map((fb) => (
              <tr key={fb.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {fb.name}
                </td>
                <td className="px-6 py-4 text-gray-700">{fb.email}</td>
                <td className="px-6 py-4 text-gray-700">{fb.feedback}</td>
                <td className="px-6 py-4 text-gray-700">{fb.rating} ⭐</td>
                <td className="px-6 py-4 text-gray-700">{fb.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      fb.status
                    )}`}
                  >
                    {fb.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex items-center justify-center gap-3">
                  <button className="p-2 text-green-600 hover:text-green-800 transition-colors">
                    <FaCheck />
                  </button>
                  <button className="p-2 text-yellow-600 hover:text-yellow-800 transition-colors">
                    <FaTimes />
                  </button>
                  <button className="p-2 text-red-600 hover:text-red-800 transition-colors">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewFeedbackPage;

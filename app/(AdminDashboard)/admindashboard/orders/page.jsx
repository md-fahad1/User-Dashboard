"use client";

import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const orders = [
  {
    id: "ORD001",
    customer: "John Doe",
    email: "john@example.com",
    total: "$120.00",
    status: "Pending",
    date: "2025-09-07",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    email: "jane@example.com",
    total: "$75.50",
    status: "Completed",
    date: "2025-09-06",
  },
  {
    id: "ORD003",
    customer: "Mike Johnson",
    email: "mike@example.com",
    total: "$200.00",
    status: "Cancelled",
    date: "2025-09-05",
  },
];

const OrderPage = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
        <p className="text-gray-600">Manage all orders from your customers</p>
      </div>

      {/* Orders Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Total
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-gray-700">{order.customer}</td>
                <td className="px-6 py-4 text-gray-700">{order.email}</td>
                <td className="px-6 py-4 text-gray-700">{order.total}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700">{order.date}</td>
                <td className="px-6 py-4 flex items-center justify-center gap-3">
                  <button className="p-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <FaEye />
                  </button>
                  <button className="p-2 text-yellow-600 hover:text-yellow-800 transition-colors">
                    <FaEdit />
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

export default OrderPage;

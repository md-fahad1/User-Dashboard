"use client";

import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

// Sample Vendor Data
const vendors = [
  {
    id: "VND001",
    name: "Tech Supplies Ltd.",
    email: "contact@techsupplies.com",
    products: 45,
    status: "Active",
  },
  {
    id: "VND002",
    name: "Gadget World",
    email: "info@gadgetworld.com",
    products: 30,
    status: "Inactive",
  },
  {
    id: "VND003",
    name: "Smart Electronics",
    email: "support@smartelectronics.com",
    products: 80,
    status: "Active",
  },
];

const VendorsPage = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Vendors</h1>
        <p className="text-gray-600">Manage all registered vendors</p>
      </div>

      {/* Vendors Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Vendor Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Products
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
            {vendors.map((vendor) => (
              <tr
                key={vendor.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {vendor.name}
                </td>
                <td className="px-6 py-4 text-gray-700">{vendor.email}</td>
                <td className="px-6 py-4 text-gray-700">{vendor.products}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      vendor.status
                    )}`}
                  >
                    {vendor.status}
                  </span>
                </td>
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

export default VendorsPage;

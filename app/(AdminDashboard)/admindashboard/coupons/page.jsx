"use client";

import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaGift } from "react-icons/fa";

const PromotionsPage = () => {
  // Dummy data
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      code: "SUMMER20",
      discount: "20%",
      type: "Percentage",
      status: "Active",
      expiry: "2025-10-01",
    },
    {
      id: 2,
      code: "FALL50",
      discount: "$50",
      type: "Fixed Amount",
      status: "Inactive",
      expiry: "2025-11-15",
    },
    {
      id: 3,
      code: "WELCOME10",
      discount: "10%",
      type: "Percentage",
      status: "Active",
      expiry: "2025-12-31",
    },
    {
      id: 4,
      code: "HOLIDAY30",
      discount: "30%",
      type: "Percentage",
      status: "Active",
      expiry: "2025-12-25",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Promotions & Coupons
          </h1>
          <p className="text-gray-600">
            Manage all your active promotions and coupons here
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#38ada9] hover:bg-[#78e08f] text-white px-4 py-2 rounded-lg shadow-md transition-all">
          <FaPlus /> Add Coupon
        </button>
      </div>

      {/* Promotion Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center justify-center transition-transform hover:-translate-y-1"
          >
            <div className="bg-[#f78fb3] text-white w-12 h-12 flex items-center justify-center rounded-full mb-3">
              <FaGift />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              {coupon.code}
            </h2>
            <p className="mt-1 text-gray-600">
              {coupon.discount} - {coupon.type}
            </p>
            <span
              className={`mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                coupon.status === "Active"
                  ? "bg-[#78e08f] text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {coupon.status}
            </span>
          </div>
        ))}
      </div>

      {/* Coupons Table */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          All Coupons
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#0a3d62] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Code
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Discount
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Expiry
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {coupons.map((coupon) => (
                <tr
                  key={coupon.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-100 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-800 font-medium">
                    {coupon.code}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{coupon.discount}</td>
                  <td className="px-6 py-4 text-gray-700">{coupon.type}</td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      coupon.status === "Active"
                        ? "text-[#38ada9]"
                        : "text-gray-500"
                    }`}
                  >
                    {coupon.status}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{coupon.expiry}</td>
                  <td className="px-6 py-4 text-center flex items-center justify-center gap-3">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;

"use client";

import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const CategoryPage = () => {
  // Sample categories
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Electronics",
      image: "https://via.placeholder.com/100",
      status: "Active",
    },
    {
      id: 2,
      name: "Fashion",
      image: "https://via.placeholder.com/100",
      status: "Active",
    },
    {
      id: 3,
      name: "Home Appliances",
      image: "https://via.placeholder.com/100",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Books",
      image: "https://via.placeholder.com/100",
      status: "Active",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Categories</h1>
          <p className="text-gray-600">Manage all product categories</p>
        </div>
        <button className="flex items-center gap-2 bg-[#38ada9] hover:bg-[#78e08f] text-white px-4 py-2 rounded-lg shadow-md transition-all">
          <FaPlus /> Add Category
        </button>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center justify-center transition-transform hover:-translate-y-1"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 rounded-full mb-3 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {category.name}
            </h2>
            <span
              className={`mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                category.status === "Active"
                  ? "bg-[#78e08f] text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {category.status}
            </span>
            <div className="flex gap-3 mt-4">
              <button className="text-blue-500 hover:text-blue-700">
                <FaEdit />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Table */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          All Categories
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#0a3d62] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories.map((category) => (
                <tr
                  key={category.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-800 font-medium flex items-center gap-3">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {category.name}
                  </td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      category.status === "Active"
                        ? "text-[#38ada9]"
                        : "text-gray-500"
                    }`}
                  >
                    {category.status}
                  </td>
                  <td className="px-6 py-4 text-center flex justify-center gap-3">
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

export default CategoryPage;

"use client";

import React from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

// Sample Product Data
const products = [
  {
    id: "PRD001",
    name: "Smartphone X",
    category: "Electronics",
    price: "$499",
    stock: "In Stock",
    image: "https://via.placeholder.com/60",
  },
  {
    id: "PRD002",
    name: "Wireless Headphones",
    category: "Accessories",
    price: "$99",
    stock: "Low Stock",
    image: "https://via.placeholder.com/60",
  },
  {
    id: "PRD003",
    name: "Gaming Laptop",
    category: "Computers",
    price: "$1200",
    stock: "Out of Stock",
    image: "https://via.placeholder.com/60",
  },
];

const ProductPage = () => {
  const getStockColor = (stock) => {
    switch (stock) {
      case "In Stock":
        return "bg-green-100 text-green-800";
      case "Low Stock":
        return "bg-yellow-100 text-yellow-800";
      case "Out of Stock":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>
        <p className="text-gray-600">Manage all products in your store</p>
      </div>

      {/* Products Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Image
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Stock
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </td>
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {product.name}
                </td>
                <td className="px-6 py-4 text-gray-700">{product.category}</td>
                <td className="px-6 py-4 text-gray-700">{product.price}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStockColor(
                      product.stock
                    )}`}
                  >
                    {product.stock}
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

export default ProductPage;

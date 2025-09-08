"use client";

import React, { useState } from "react";
import TableHeader from "@/helper/TableHeader"; // Reusable header
import ViewEditDelete from "@/helper/ViewEditDelete"; // Reusable actions

/* ---------------- Sample Product Data ---------------- */
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
  {
    id: "PRD004",
    name: "Smartwatch Pro",
    category: "Wearables",
    price: "$199",
    stock: "In Stock",
    image: "https://via.placeholder.com/60",
  },
  {
    id: "PRD005",
    name: "4K Monitor",
    category: "Computers",
    price: "$350",
    stock: "Low Stock",
    image: "https://via.placeholder.com/60",
  },
];

/* ---------------- Tabs for Products ---------------- */
const tabs = [
  { label: "All", count: 348 },
  { label: "In Stock", count: 200 },
  { label: "Low Stock", count: 65 },
  { label: "Out of Stock", count: 83 },
];

/* ---------------- Helper for Stock Colors ---------------- */
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

/* ---------------- Product Page ---------------- */
const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Header (Reusable) */}
      <TableHeader
        title="Products"
        subtitle="Manage all products in your store"
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onSearch={(val) => console.log("Search:", val)}
        onAdd={() => console.log("Add Product")}
        onExport={() => console.log("Export Products")}
        onSettings={() => console.log("Settings Clicked")}
        filters={[
          {
            options: ["Stock Status", "In Stock", "Low Stock", "Out of Stock"],
            onChange: (val) => console.log("Filter Stock:", val),
          },
          {
            options: ["Category", "Electronics", "Computers", "Accessories"],
            onChange: (val) => console.log("Filter Category:", val),
          },
        ]}
      />

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
                    className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold w-28 text-center ${getStockColor(
                      product.stock
                    )}`}
                  >
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <ViewEditDelete
                    onView={() => console.log("View product", product.id)}
                    onEdit={() => console.log("Edit product", product.id)}
                    onDelete={() => console.log("Delete product", product.id)}
                  />
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

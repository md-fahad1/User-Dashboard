"use client";
import React, { useState } from "react";
import TableHeader from "@/helper/TableHeader"; // reusable header
import ViewEditDelete from "@/helper/ViewEditDelete";

const categoriesData = [
  {
    id: 1,
    name: "Electronics",
    status: "Active",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Fashion",
    status: "Active",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Home Appliances",
    status: "Inactive",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Books",
    status: "Active",
    image: "https://via.placeholder.com/100",
  },
];

const tabs = [
  { label: "All", count: 4 },
  { label: "Active", count: 3 },
  { label: "Inactive", count: 1 },
];

const getStatusColor = (status) => {
  return status === "Active"
    ? "bg-green-100 text-green-800"
    : "bg-gray-100 text-gray-700";
};

const CategoryPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCategories =
    activeTab === "All"
      ? categoriesData
      : categoriesData.filter((cat) => cat.status === activeTab);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Reusable Table Header */}
      <TableHeader
        title="Categories"
        subtitle="Manage all product categories"
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onSearch={(val) => console.log("Search:", val)}
        onAdd={() => console.log("Add Category")}
        onExport={() => console.log("Export Categories")}
        onSettings={() => console.log("Settings Clicked")}
      />

      {/* Category Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-green-200">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              {category.name}
            </h2>
            <span
              className={`mt-2 px-4 py-1 rounded-full text-sm font-semibold w-28 text-center ${getStatusColor(
                category.status
              )}`}
            >
              {category.status}
            </span>
            <div className="flex gap-4 mt-5">
              <ViewEditDelete
                onView={() => console.log("View category")}
                onEdit={() => console.log("Edit category")}
                onDelete={() => console.log("Delete category")}
              />
            </div>
          </div>
        ))}
      </div> */}

      {/* Categories Table */}
      <div className="bg-white shadow-lg rounded-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredCategories.map((category) => (
              <tr
                key={category.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-10 h-10 rounded-md object-cover border"
                  />
                  <span className="text-gray-800 font-medium">
                    {category.name}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold w-28 text-center ${getStatusColor(
                      category.status
                    )}`}
                  >
                    {category.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <ViewEditDelete
                    onView={() => console.log("View category")}
                    onEdit={() => console.log("Edit category")}
                    onDelete={() => console.log("Delete category")}
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

export default CategoryPage;

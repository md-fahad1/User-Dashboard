"use client";

import React, { useState } from "react";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";

const UserPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      status: "Active",
    },
    {
      id: 4,
      name: "Sara Wilson",
      email: "sara@example.com",
      status: "Pending",
    },
    { id: 5, name: "Tom Hanks", email: "tom@example.com", status: "Active" },
  ];

  const stats = [
    { title: "Total Users", value: users.length, color: "bg-[#38ada9]" },
    {
      title: "Active Users",
      value: users.filter((u) => u.status === "Active").length,
      color: "bg-[#78e08f]",
    },
    {
      title: "Inactive Users",
      value: users.filter((u) => u.status === "Inactive").length,
      color: "bg-[#f78fb3]",
    },
    {
      title: "Pending Users",
      value: users.filter((u) => u.status === "Pending").length,
      color: "bg-[#0a3d62]",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>
        <p className="text-gray-600">Manage all users</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`${stat.color} text-white shadow-lg rounded-lg p-5 flex flex-col items-center justify-center`}
          >
            <h2 className="text-xl font-semibold">{stat.title}</h2>
            <p className="mt-2 text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="mb-4 flex justify-end">
        <div className="flex items-center bg-white rounded-full shadow px-4 py-2 w-full max-w-xs">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full outline-none text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#0a3d62] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Email
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
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-800 font-medium">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{user.email}</td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      user.status === "Active"
                        ? "text-[#38ada9]"
                        : user.status === "Inactive"
                        ? "text-[#f78fb3]"
                        : "text-[#0a3d62]"
                    }`}
                  >
                    {user.status}
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

export default UserPage;

"use client";

import React, { useState } from "react";
import { FaUsers, FaUserCheck, FaUserTimes, FaUserClock } from "react-icons/fa";
import ViewEditDelete from "@/helper/ViewEditDelete";
import TableHeader from "@/helper/TableHeader";

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    image: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Inactive",
    image: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    status: "Active",
    image: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Sara Wilson",
    email: "sara@example.com",
    status: "Pending",
    image: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    name: "Tom Hanks",
    email: "tom@example.com",
    status: "Active",
    image: "https://i.pravatar.cc/40?img=5",
  },
];

const tabs = [
  { label: "All", count: usersData.length },
  {
    label: "Active",
    count: usersData.filter((u) => u.status === "Active").length,
  },
  {
    label: "Inactive",
    count: usersData.filter((u) => u.status === "Inactive").length,
  },
  {
    label: "Pending",
    count: usersData.filter((u) => u.status === "Pending").length,
  },
];

const stats = [
  {
    title: "Total Users",
    value: usersData.length,
    icon: FaUsers,
    color: "bg-blue-100 text-blue-800",
    iconBg: "bg-blue-100",
  },
  {
    title: "Active Users",
    value: usersData.filter((u) => u.status === "Active").length,
    icon: FaUserCheck,
    color: "bg-green-100 text-green-800",
    iconBg: "bg-green-100",
  },
  {
    title: "Inactive Users",
    value: usersData.filter((u) => u.status === "Inactive").length,
    icon: FaUserTimes,
    color: "bg-red-100 text-red-800",
    iconBg: "bg-red-100",
  },
  {
    title: "Pending Users",
    value: usersData.filter((u) => u.status === "Pending").length,
    icon: FaUserClock,
    color: "bg-yellow-100 text-yellow-800",
    iconBg: "bg-yellow-100",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800";
    case "Inactive":
      return "bg-red-100 text-red-800";
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const UserPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = usersData
    .filter((user) => activeTab === "All" || user.status === activeTab)
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Reusable Table Header */}
      <TableHeader
        title="Users"
        subtitle="Manage all users in your system"
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onSearch={(val) => setSearchTerm(val)}
        onAdd={() => console.log("Add User")}
        onExport={() => console.log("Export Users")}
        onSettings={() => console.log("Settings Clicked")}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className={`flex items-center justify-between p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow bg-white`}
            >
              <div>
                <h2 className="text-gray-500 text-sm font-medium">
                  {stat.title}
                </h2>
                <p className="mt-2 text-2xl font-bold text-gray-900">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.iconBg}`}>
                <Icon className={`text-xl ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Users Table */}
      <div className="bg-white shadow-lg rounded-xl p-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                User
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Email
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
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <span className="text-gray-800 font-medium">{user.name}</span>
                </td>
                <td className="px-6 py-4 text-gray-700">{user.email}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold w-28 text-center ${getStatusColor(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <ViewEditDelete
                    onView={() => console.log("View User")}
                    onEdit={() => console.log("Edit User")}
                    onDelete={() => console.log("Delete User")}
                  />
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPage;

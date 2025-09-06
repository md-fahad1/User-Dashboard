"use client";

import React from "react";
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaBoxOpen,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminDashboard = () => {
  // Stats data with icons and colors
  const stats = [
    { title: "Users", value: 1200, icon: FaUsers, color: "#38ada9" },
    { title: "Orders", value: 320, icon: FaShoppingCart, color: "#0a3d62" },
    {
      title: "Revenue",
      value: "$12,400",
      icon: FaDollarSign,
      color: "#78e08f",
    },
    { title: "Products", value: 85, icon: FaBoxOpen, color: "#f78fb3" },
  ];

  // Bar Chart Data (Orders per Month)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders",
        data: [30, 45, 60, 50, 75, 90],
        backgroundColor: "#0a3d62",
        borderRadius: 6,
      },
    ],
  };

  // Doughnut Chart Data (User Status)
  const doughnutData = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        data: [1200, 200],
        backgroundColor: ["#38ada9", "#f78fb3"],
        hoverOffset: 10,
      },
    ],
  };

  // Dummy Latest Orders
  const latestOrders = [
    { id: "#OD001", customer: "John Doe", total: "$120", status: "Delivered" },
    { id: "#OD002", customer: "Jane Smith", total: "$250", status: "Pending" },
    {
      id: "#OD003",
      customer: "Mike Johnson",
      total: "$75",
      status: "Cancelled",
    },
    {
      id: "#OD004",
      customer: "Sara Wilson",
      total: "$320",
      status: "Delivered",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back, Admin!</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="flex items-center p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow bg-white"
            >
              <div
                className="p-4 rounded-full text-white mr-4 flex items-center justify-center"
                style={{ backgroundColor: stat.color }}
              >
                <Icon size={28} />
              </div>
              <div>
                <h2 className="text-gray-700 font-semibold">{stat.title}</h2>
                <p className="mt-1 text-2xl font-bold text-gray-900">
                  {stat.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-xl rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Orders Per Month
          </h2>
          <Bar
            data={barData}
            options={{
              responsive: true,
              plugins: {
                legend: { display: false },
              },
              scales: {
                y: { beginAtZero: true },
              },
            }}
          />
        </div>

        <div className="bg-white shadow-xl rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            User Status
          </h2>
          <Doughnut
            data={doughnutData}
            options={{
              responsive: true,
              plugins: { legend: { position: "bottom" } },
            }}
          />
        </div>
      </div>

      {/* Recent Users Table */}
      <div className="bg-white shadow-xl rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Users
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                  Name
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
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  name: "John Doe",
                  email: "john@example.com",
                  status: "Active",
                },
                {
                  name: "Jane Smith",
                  email: "jane@example.com",
                  status: "Inactive",
                },
                {
                  name: "Mike Johnson",
                  email: "mike@example.com",
                  status: "Active",
                },
              ].map((user, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-700 font-medium">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{user.email}</td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      user.status === "Active"
                        ? "text-[#38ada9]"
                        : "text-[#f78fb3]"
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

      {/* Latest Orders Table */}
      <div className="bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Latest Orders
        </h2>
        <div className="overflow-x-auto">
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
                  Total
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {latestOrders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-700 font-medium">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-700">{order.total}</td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      order.status === "Delivered"
                        ? "text-[#38ada9]"
                        : order.status === "Pending"
                        ? "text-[#f78fb3]"
                        : "text-[#0a3d62]"
                    }`}
                  >
                    {order.status}
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

export default AdminDashboard;

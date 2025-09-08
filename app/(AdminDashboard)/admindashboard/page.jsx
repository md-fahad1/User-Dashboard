"use client";

import React from "react";
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaBoxOpen,
  FaEdit,
  FaTrash,
  FaBell,
  FaCreditCard,
  FaArrowUp,
  FaArrowDown,
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
import { Line } from "react-chartjs-2";
import { PointElement, LineElement, Filler } from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminDashboard = () => {
  // Stats data with trends
  const stats = [
    {
      title: "Orders",
      value: "85,246",
      icon: FaShoppingCart,
      color: "bg-blue-100 text-blue-500",
      change: "+8%",
      trend: "up",
    },
    {
      title: "Income",
      value: "$96,147",
      icon: FaDollarSign,
      color: "bg-green-100 text-green-500",
      change: "+12%",
      trend: "up",
    },
    {
      title: "Users",
      value: "846",
      icon: FaUsers,
      color: "bg-pink-100 text-pink-500",
      change: "-5%",
      trend: "down",
    },
    {
      title: "Payment",
      value: "$84,472",
      icon: FaCreditCard,
      color: "bg-cyan-100 text-cyan-500",
      change: "-2%",
      trend: "down",
    },
  ];

  const barData1 = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Users",
        data: [12, 19, 14, 25, 20, 17, 13],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
          gradient.addColorStop(0, "#ff416c"); // pink/red
          gradient.addColorStop(1, "#ff4b2b"); // deep red
          return gradient;
        },
        borderRadius: 8,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };
  const doughnutData1 = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        data: [78, 22], // 78% active
        backgroundColor: ["#4f46e5", "#f3f4f6"], // blue & gray
        borderWidth: 0,
        cutout: "80%",
        circumference: 180, // half circle
        rotation: -90, // start from top
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
  };

  const salesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly Sales",
        data: [2000, 2500, 1700, 2800, 4500, 3000, 2400, 5500],
        borderColor: "#10b981", // green line
        backgroundColor: "rgba(16,185,129,0.2)", // soft green fill
        fill: true,
        tension: 0.4, // smooth curve
        borderWidth: 2,
        pointRadius: 0, // hide points
      },
    ],
  };

  const salesOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  // Bar Chart Data
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

  // Doughnut Chart Data
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

  // Dummy Orders
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
      <div className="flex flex-row gap-3 mb-5 items-stretch">
        {/* Left Card */}
        <div className="bg-white shadow-md rounded-xl p-4 w-1/3 h-[180px] flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">$9,568</h2>
          <p className="text-gray-600 flex items-center">
            Average Weekly Sales
            <span className="ml-2 text-red-500 text-sm">▼ 8.6%</span>
          </p>
          <div className="h-20 mt-0 flex-1">
            <Line data={salesData} options={salesOptions} />
          </div>
        </div>

        {/* Right Card */}
        <div className="grid grid-cols-1 shadow-md sm:grid-cols-2 lg:grid-cols-4 bg-white rounded-xl  divide-y sm:divide-y-0 sm:divide-x w-2/3 h-full">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col items-center justify-center p-8 h-full"
              >
                {/* Up/Down Indicator - Top Right */}
                <div className="absolute top-3 right-3 flex items-center gap-1">
                  {stat.trend === "up" ? (
                    <FaArrowUp className="text-green-500" />
                  ) : (
                    <FaArrowDown className="text-red-500" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full mb-3 ${stat.color}`}
                >
                  <Icon size={24} />
                </div>

                {/* Value */}
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>

                {/* Title */}
                <p className="text-gray-500 text-sm">{stat.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4 items-stretch">
        {/* Left Column: Two Small Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          {/* Active Users */}
          <div className="bg-white shadow-md rounded-xl p-5 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800">42.5K</h2>
                <p className="text-gray-500">Active Users</p>
              </div>
              <button className="text-gray-400">⋮</button>
            </div>
            <div className="h-32 flex items-center justify-center">
              <div className="w-28 h-28 relative">
                <Doughnut data={doughnutData1} options={doughnutOptions} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-700">78%</span>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center mt-2">
              24K users increased from last month
            </p>
          </div>

          {/* Total Users */}
          <div className="bg-white shadow-md rounded-xl p-5 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800">97.4K</h2>
                <p className="text-gray-500">Total Users</p>
              </div>
              <button className="text-gray-400">⋮</button>
            </div>
            <div className="h-32 mt-3">
              <Bar data={barData1} options={barOptions} />
            </div>
            <p className="text-green-500 text-sm mt-2">12.5% from last month</p>
          </div>
        </div>

        {/* Right Column: Big Chart */}
        <div className="bg-white shadow-md rounded-xl p-6 h-full flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Orders Per Month
          </h2>
          <div className="flex-1">
            <Bar
              data={barData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } },
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
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

      {/* Latest Orders */}
      <div className="bg-white shadow-md rounded-xl p-6">
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
                        ? "text-yellow-500"
                        : "text-red-500"
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

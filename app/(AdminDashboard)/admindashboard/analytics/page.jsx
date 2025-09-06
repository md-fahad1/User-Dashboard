"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { FaUsers, FaShoppingCart, FaDollarSign, FaBox } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AnalyticsPage = () => {
  // Sample stats
  const stats = [
    { title: "Users", value: 1200, icon: <FaUsers />, color: "bg-teal-400" },
    {
      title: "Orders",
      value: 320,
      icon: <FaShoppingCart />,
      color: "bg-blue-500",
    },
    {
      title: "Revenue",
      value: "$12,400",
      icon: <FaDollarSign />,
      color: "bg-purple-500",
    },
    { title: "Products", value: 85, icon: <FaBox />, color: "bg-pink-400" },
  ];

  // Bar Chart Data
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders",
        data: [30, 45, 60, 50, 75, 90],
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderRadius: 5,
      },
    ],
  };

  // Doughnut Chart Data
  const doughnutData = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        data: [1200, 200],
        backgroundColor: ["#10B981", "#EF4444"],
        hoverOffset: 10,
      },
    ],
  };

  // Line Chart Data
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [4000, 5000, 6000, 5500, 7500, 9000],
        fill: false,
        borderColor: "#6366F1",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Analytics</h1>
        <p className="text-gray-600">Overview of key performance metrics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`flex items-center gap-4 p-5 rounded-lg shadow-lg text-white ${stat.color}`}
          >
            <div className="text-3xl">{stat.icon}</div>
            <div>
              <h2 className="text-lg font-semibold">{stat.title}</h2>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6 col-span-1 lg:col-span-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Orders Per Month
          </h2>
          <Bar
            data={barData}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
            }}
          />
        </div>

        <div className="bg-white shadow rounded-lg p-6 col-span-1 lg:col-span-1">
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

        <div className="bg-white shadow rounded-lg p-6 col-span-1 lg:col-span-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Revenue Trend
          </h2>
          <Line
            data={lineData}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;

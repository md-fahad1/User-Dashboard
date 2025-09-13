"use client";
import { AiOutlineWarning, AiFillWarning } from "react-icons/ai";
import React from "react";
import { orders } from "@/lib/data/orderData";
import { products } from "@/lib/data/productData";
import { getStockColor } from "@/utils/stockColors";
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
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
import DataTable from "@/helper/DataTable";
import { getStatusColor } from "@/utils/statusColors";

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
  const stockItems = [
    {
      name: "T-Shirt",
      current: 120,
      total: 200,
      color: "bg-red-100",
      border: "border-red-300",
      icon: <AiFillWarning className="text-red-500 text-xl" />,
    },
    {
      name: "Pant",
      current: 60,
      total: 100,
      color: "bg-yellow-100",
      border: "border-yellow-300",
      icon: <AiOutlineWarning className="text-yellow-500 text-xl" />,
    },
    {
      name: "Panjabi",
      current: 30,
      total: 50,
      color: "bg-blue-100",
      border: "border-blue-300",
      icon: <AiOutlineWarning className="text-blue-500 text-xl" />,
    },
  ];

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
        barThickness: 10,
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
        borderColor: "#10b981",
        backgroundColor: "rgba(16,185,129,0.2)",
        fill: true,
        tension: 0.4,
        borderWidth: 1,
        pointRadius: 0,
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

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders",
        data: [30, 45, 60, 50, 75, 90],
        backgroundColor: "#0a3d62",
        borderRadius: 6,
        barThickness: 30,
      },
    ],
  };

  const product_columns = [
    { key: "image", label: "Image", align: "left" },
    { key: "name", label: "Name", align: "left" },
    { key: "category", label: "Category", align: "left" },
    { key: "price", label: "Price", align: "left" },
    { key: "stock", label: "Stock", align: "center" },
  ];
  const columns = [
    { key: "customer", label: "Customer", align: "left" },
    { key: "email", label: "Email", align: "left" },
    { key: "total", label: "Total", align: "left" },
    { key: "date", label: "Date", align: "left" },
    { key: "status", label: "Status", align: "center" },
  ];
  const Product_renderCell = (row, key) => {
    switch (key) {
      case "image":
        return (
          <img
            src={row.image}
            alt={row.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
        );
      case "stock":
        return (
          <span
            className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold w-28 text-center ${
              getStockColor?.(row.stock) || "bg-gray-100 text-gray-800"
            }`}
          >
            {row.stock}
          </span>
        );
      case "actions":
        return (
          <ViewEditDelete
            onView={() => console.log("View product", row.id)}
            onEdit={() => console.log("Edit product", row.id)}
            onDelete={() => console.log("Delete product", row.id)}
          />
        );
      default:
        return row[key];
    }
  };

  const renderCell = (row, key) => {
    switch (key) {
      case "customer":
        return (
          <div className="flex items-center gap-3">
            <img
              src={row.image}
              alt={row.customer}
              className="w-10 h-10 rounded-full object-cover border"
            />
            <span className="text-gray-800 font-medium">{row.customer}</span>
          </div>
        );
      case "status":
        return (
          <span
            className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold w-28 text-center ${getStatusColor(
              row.status
            )}`}
          >
            {row.status}
          </span>
        );

      default:
        return row[key];
    }
  };
  const oders_five = orders.slice(0, 5);
  const products_five = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-100 p-3">
      {/* Header */}
      <div className="mb-3">
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
                      stat.trend === "up" ? "text-green-600" : "text-pink-400"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full mb-3 ${stat.color}`}
                >
                  <Icon size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-row gap-3 mb-4 items-stretch h-[250px]">
        {/* Left Column: Two Small Cards */}
        <div className=" flex flex-row gap-3 h-full w-1/3">
          <div className="bg-white shadow-md w-1/2 rounded-xl p-3 flex flex-col justify-between">
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
          <div className="bg-white shadow-md w-1/2 rounded-xl px-3 py-3 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800">42.5K</h2>
                <p className="text-gray-500">Active Users</p>
              </div>
              <button className="text-gray-400">⋮</button>
            </div>
            <div className="h-32 flex items-center justify-center">
              <div className=" h-32 relative">
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
        </div>

        {/* Right Column: Big Chart */}
        <div className="w-2/3">
          <div className="flex flex-row h-[250px] gap-3 w-full">
            <div className="bg-white shadow-md rounded-xl p-3 flex flex-col w-1/2">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                Orders Per Month
              </h2>
              <div className="flex-1 h-36  w-full">
                {" "}
                <Bar
                  data={barData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { y: { beginAtZero: true } },
                  }}
                />
              </div>
            </div>

            <div className="bg-white shadow-md rounded-xl p-3 w-1/2">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                Stock Alerts
              </h2>
              <div className="flex flex-col gap-2">
                {stockItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 p-2 rounded-xl ${item.color} border-l-8 ${item.border}`}
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        {item.current} / {item.total} pcs
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Products
        </h2>
        <DataTable
          columns={product_columns}
          data={products_five}
          renderCell={Product_renderCell}
        />
      </div>

      {/* Latest Orders */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Latest Orders
        </h2>
        <DataTable columns={columns} data={oders_five} renderCell={renderCell} />
      </div>
    </div>
  );
};

export default AdminDashboard;

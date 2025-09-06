"use client";

import React, { useState } from "react";
import {
  FaBoxOpen,
  FaCalendarAlt,
  FaDollarSign,
  FaClipboardList,
  FaTruck,
  FaCheckCircle,
  FaHourglassHalf,
} from "react-icons/fa";

const UserOrderPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const orders = [
    {
      id: "ORD001",
      date: "2025-08-01",
      status: "Delivered",
      items: 3,
      total: "$120",
    },
    {
      id: "ORD002",
      date: "2025-08-05",
      status: "Pending",
      items: 1,
      total: "$75",
    },
    {
      id: "ORD003",
      date: "2025-08-07",
      status: "Shipped",
      items: 2,
      total: "$220",
    },
    {
      id: "ORD004",
      date: "2025-08-10",
      status: "Delivered",
      items: 5,
      total: "$320",
    },
    {
      id: "ORD005",
      date: "2025-08-12",
      status: "Pending",
      items: 1,
      total: "$50",
    },
  ];

  const tabs = ["All", "Pending", "Shipped", "Delivered"];

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  const getStatusIcon = (status) => {
    if (status === "Delivered")
      return <FaCheckCircle className="inline mr-1" />;
    if (status === "Pending")
      return <FaHourglassHalf className="inline mr-1" />;
    if (status === "Shipped") return <FaTruck className="inline mr-1" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
        <p className="text-gray-600">
          Track your orders and check their status here.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-blue-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow rounded-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 md:mb-0 flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <FaClipboardList className="text-blue-500" />
                {order.id}
              </h2>
              <p className="text-gray-500 flex items-center gap-2">
                <FaCalendarAlt className="text-gray-400" /> {order.date}
              </p>
              <p className="text-gray-500 flex items-center gap-2">
                <FaBoxOpen className="text-gray-400" /> {order.items} items
              </p>
            </div>
            <div className="mb-4 md:mb-0">
              <span
                className={`px-3 py-1 rounded-full font-semibold flex items-center gap-1 ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {getStatusIcon(order.status)}
                {order.status}
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="text-gray-800 font-bold text-lg flex items-center gap-1">
                <FaDollarSign /> {order.total}
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                View Details
              </button>
              {order.status === "Shipped" && (
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors flex items-center gap-1">
                  <FaTruck /> Track
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No orders found in this category.
        </p>
      )}
    </div>
  );
};

export default UserOrderPage;

"use client";

import React from "react";
import { FaShoppingCart, FaHeart, FaBox, FaWallet } from "react-icons/fa";

const UserDashboard = () => {
  const userName = "John Doe";

  const stats = [
    {
      title: "Total Orders",
      value: 12,
      icon: FaShoppingCart,
      color: "bg-blue-500",
    },
    { title: "Pending Orders", value: 3, icon: FaBox, color: "bg-yellow-500" },
    { title: "Wishlist Items", value: 5, icon: FaHeart, color: "bg-pink-500" },
    {
      title: "Wallet Balance",
      value: "$240",
      icon: FaWallet,
      color: "bg-green-500",
    },
  ];

  const recentOrders = [
    { id: "ORD001", date: "2025-08-01", status: "Shipped", total: "$120" },
    { id: "ORD002", date: "2025-08-05", status: "Pending", total: "$75" },
    { id: "ORD003", date: "2025-08-07", status: "Delivered", total: "$220" },
  ];

  const wishlist = [
    {
      name: "Wireless Headphones",
      price: "$80",
      img: "https://via.placeholder.com/80",
    },
    {
      name: "Smart Watch",
      price: "$150",
      img: "https://via.placeholder.com/80",
    },
    {
      name: "Bluetooth Speaker",
      price: "$60",
      img: "https://via.placeholder.com/80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Welcome Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {userName}!
        </h1>
        <p className="text-gray-600">
          Here’s a quick overview of your account.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="flex items-center p-5 rounded-lg shadow-lg bg-white"
            >
              <div className={`p-4 rounded-full text-white mr-4 ${stat.color}`}>
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

      {/* Recent Orders */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Orders
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-100 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-700">{order.id}</td>
                  <td className="px-6 py-4 text-gray-700">{order.date}</td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Pending"
                        ? "text-yellow-600"
                        : "text-blue-600"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{order.total}</td>
                  <td className="px-6 py-4">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Wishlist Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Wishlist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="mb-3 w-24 h-24 object-cover rounded"
              />
              <h3 className="text-gray-700 font-semibold">{item.name}</h3>
              <p className="text-gray-900 font-bold">{item.price}</p>
              <button className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

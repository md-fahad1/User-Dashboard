"use client";

import React from "react";
import { FaUserEdit, FaLock, FaShoppingCart, FaHeart } from "react-icons/fa";

const UserProfilePage = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+880 123 456 789",
    address: "123, Main Street, Dhaka, Bangladesh",
    orders: 15,
    wishlist: 5,
    joined: "January 2023",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
          <p className="text-gray-600">Manage your account information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-32 h-32 rounded-full border-4 border-gray-300"
            />
          </div>

          {/* User Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
            <p className="text-gray-500">{user.address}</p>
            <p className="text-gray-400 text-sm mt-1">
              Member since {user.joined}
            </p>

            {/* Action Buttons */}
            <div className="mt-4 flex gap-3">
              <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                <FaUserEdit /> Edit Profile
              </button>
              <button className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
                <FaLock /> Change Password
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 md:mt-0 flex flex-col gap-3">
            <div className="flex items-center gap-2 bg-gray-100 p-3 rounded shadow-sm">
              <FaShoppingCart className="text-green-500 text-xl" />
              <div>
                <p className="text-gray-800 font-semibold">{user.orders}</p>
                <p className="text-gray-500 text-sm">Orders</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 p-3 rounded shadow-sm">
              <FaHeart className="text-red-500 text-xl" />
              <div>
                <p className="text-gray-800 font-semibold">{user.wishlist}</p>
                <p className="text-gray-500 text-sm">Wishlist Items</p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Details / Additional Info */}
        <div className="bg-white shadow rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Account Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-gray-50">
              <p className="text-gray-500">Full Name</p>
              <p className="text-gray-800 font-semibold">{user.name}</p>
            </div>
            <div className="p-4 border rounded-lg bg-gray-50">
              <p className="text-gray-500">Email</p>
              <p className="text-gray-800 font-semibold">{user.email}</p>
            </div>
            <div className="p-4 border rounded-lg bg-gray-50">
              <p className="text-gray-500">Phone</p>
              <p className="text-gray-800 font-semibold">{user.phone}</p>
            </div>
            <div className="p-4 border rounded-lg bg-gray-50">
              <p className="text-gray-500">Address</p>
              <p className="text-gray-800 font-semibold">{user.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;

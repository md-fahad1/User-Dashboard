"use client";

import React, { useState } from "react";
import { FaBell, FaMoon, FaSun, FaLock } from "react-icons/fa";

const UserSettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    orders: true,
    promotions: false,
    updates: true,
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleNotificationChange = (type) => {
    setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account preferences and settings
          </p>
        </div>

        {/* Account Settings */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Account
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-500 dark:text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="mt-1 p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-500 dark:text-gray-400">Email</label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="mt-1 p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-500 dark:text-gray-400">Phone</label>
              <input
                type="text"
                defaultValue="+880 123 456 789"
                className="mt-1 p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none"
              />
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition flex items-center gap-2">
            <FaLock /> Change Password
          </button>
        </div>

        {/* Notification Settings */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <FaBell /> Notifications
          </h2>
          <div className="flex flex-col gap-3">
            <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span>Order Updates</span>
              <input
                type="checkbox"
                checked={notifications.orders}
                onChange={() => handleNotificationChange("orders")}
                className="w-5 h-5"
              />
            </label>
            <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span>Promotions & Offers</span>
              <input
                type="checkbox"
                checked={notifications.promotions}
                onChange={() => handleNotificationChange("promotions")}
                className="w-5 h-5"
              />
            </label>
            <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span>App Updates</span>
              <input
                type="checkbox"
                checked={notifications.updates}
                onChange={() => handleNotificationChange("updates")}
                className="w-5 h-5"
              />
            </label>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            Appearance
          </h2>
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {isDarkMode ? (
              <>
                <FaSun className="text-yellow-400" /> Light Mode
              </>
            ) : (
              <>
                <FaMoon className="text-gray-600" /> Dark Mode
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;

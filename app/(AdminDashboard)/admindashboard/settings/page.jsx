"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaBell,
  FaMoon,
  FaSun,
  FaSave,
  FaTimes,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("Profile");
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    password: "",
    emailNotifications: true,
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Settings
      </h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 overflow-x-auto border-b border-gray-300 dark:border-gray-700">
        {["Profile", "Account", "Notifications", "Appearance"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium rounded-t-lg whitespace-nowrap ${
              activeTab === tab
                ? "bg-white dark:bg-gray-800 shadow-md text-gray-800 dark:text-gray-200"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-colors duration-300">
        {/* Profile Tab */}
        {activeTab === "Profile" && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-28 h-28">
                <img
                  src={avatar || "https://i.pravatar.cc/150"}
                  alt="Avatar"
                  className="w-28 h-28 rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Change Avatar
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Click the avatar to upload a new image
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaUser className="text-gray-600 dark:text-gray-300 text-lg" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#38ada9] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-600 dark:text-gray-300 text-lg" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#38ada9] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-gray-600 dark:text-gray-300 text-lg" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#38ada9] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
              </div>
            </div>
          </div>
        )}

        {/* Account Tab */}
        {activeTab === "Account" && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <FaLock className="text-gray-600 dark:text-gray-300 text-lg" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Change Password"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#38ada9] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              />
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === "Notifications" && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaBell className="text-gray-600 dark:text-gray-300 text-lg" />
                <span className="text-gray-700 dark:text-gray-200">
                  Email Notifications
                </span>
              </div>
              <input
                type="checkbox"
                name="emailNotifications"
                checked={formData.emailNotifications}
                onChange={handleChange}
                className="toggle toggle-primary"
              />
            </div>
          </div>
        )}

        {/* Appearance Tab */}
        {activeTab === "Appearance" && (
          <div className="flex items-center gap-4">
            {darkMode ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-gray-600 dark:text-gray-300 text-lg" />
            )}
            <span className="text-gray-700 dark:text-gray-200">Dark Mode</span>
            <label className="switch ml-auto">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <span className="slider round"></span>
            </label>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="flex items-center gap-2 px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <FaTimes /> Cancel
          </button>
          <button className="flex items-center gap-2 px-5 py-2 bg-[#38ada9] text-white rounded-md hover:bg-[#0a3d62] transition-colors">
            <FaSave /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

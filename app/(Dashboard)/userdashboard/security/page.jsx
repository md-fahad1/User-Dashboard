"use client";

import React, { useState } from "react";
import {
  FaLock,
  FaKey,
  FaShieldAlt,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

const SecurityPage = () => {
  const [twoFAEnabled, setTwoFAEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Security Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your password, two-factor authentication, and recent login
            activity.
          </p>
        </div>

        {/* Change Password Card */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 flex items-center gap-4 hover:shadow-lg transition">
          <FaLock className="text-3xl text-blue-500" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Change Password
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Update your account password regularly for better security.
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition">
            Change
          </button>
        </div>

        {/* Two-Factor Authentication Card */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 flex items-center gap-4 hover:shadow-lg transition">
          <FaShieldAlt className="text-3xl text-green-500" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Two-Factor Authentication
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Protect your account with an extra layer of security.
            </p>
          </div>
          <button
            onClick={() => setTwoFAEnabled(!twoFAEnabled)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition"
            style={{
              backgroundColor: twoFAEnabled ? "#38ada9" : "#ccc",
              color: "white",
            }}
          >
            {twoFAEnabled ? <FaToggleOn /> : <FaToggleOff />}
            {twoFAEnabled ? "Enabled" : "Disabled"}
          </button>
        </div>

        {/* Login Activity Card */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-4">
            <FaKey className="text-3xl text-purple-500" />
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Recent Login Activity
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase">
                    Device
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    Chrome on Windows
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    New York, USA
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    Sep 7, 2025 10:30 AM
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    Success
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    Safari on MacOS
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    Los Angeles, USA
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    Sep 6, 2025 08:15 PM
                  </td>
                  <td className="px-6 py-4 text-red-600 font-semibold">
                    Failed
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    Firefox on Linux
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    London, UK
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    Sep 5, 2025 03:45 PM
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    Success
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;

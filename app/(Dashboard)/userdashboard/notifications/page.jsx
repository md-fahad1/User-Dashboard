"use client";

import React, { useState } from "react";
import {
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaTrash,
  FaEnvelopeOpen,
} from "react-icons/fa";

const initialNotifications = [
  {
    id: 1,
    type: "info",
    message: "Your order #1234 has been shipped.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "success",
    message: "Payment for order #1223 was successful.",
    time: "1 day ago",
    read: true,
  },
  {
    id: 3,
    type: "warning",
    message: "Your subscription will expire in 3 days.",
    time: "3 days ago",
    read: false,
  },
  {
    id: 4,
    type: "error",
    message: "Failed to process your payment for order #1210.",
    time: "5 days ago",
    read: false,
  },
];

const NotificationPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const getIcon = (type) => {
    switch (type) {
      case "info":
        return <FaInfoCircle className="text-blue-500" />;
      case "success":
        return <FaCheckCircle className="text-green-500" />;
      case "warning":
        return <FaExclamationTriangle className="text-yellow-500" />;
      case "error":
        return <FaTimesCircle className="text-red-500" />;
      default:
        return null;
    }
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
          <p className="text-gray-600">Keep track of your recent activities.</p>
        </div>
        <button
          onClick={() => setNotifications([])}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        {notifications.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No notifications to show.
          </p>
        )}

        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-center gap-4 p-4 rounded-lg shadow transition-shadow cursor-pointer ${
              notif.read ? "bg-gray-100" : "bg-white hover:shadow-lg"
            }`}
          >
            <div className="text-2xl">{getIcon(notif.type)}</div>
            <div className="flex-1">
              <p
                className={`text-gray-800 ${
                  notif.read ? "font-normal" : "font-semibold"
                }`}
              >
                {notif.message}
              </p>
              <span className="text-gray-500 text-sm">{notif.time}</span>
            </div>
            <div className="flex items-center gap-2">
              {!notif.read && (
                <button
                  onClick={() => markAsRead(notif.id)}
                  className="text-blue-500 hover:text-blue-700"
                  title="Mark as read"
                >
                  <FaEnvelopeOpen />
                </button>
              )}
              <button
                onClick={() => deleteNotification(notif.id)}
                className="text-red-500 hover:text-red-700"
                title="Delete"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;

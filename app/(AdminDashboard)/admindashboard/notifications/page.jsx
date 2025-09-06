"use client";

import React, { useState } from "react";
import {
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes,
  FaTrashAlt,
} from "react-icons/fa";

const notificationsData = [
  {
    id: 1,
    type: "info",
    title: "New User Registered",
    message: "John Doe just signed up.",
    time: "2 mins ago",
    read: false,
  },
  {
    id: 2,
    type: "success",
    title: "Order Completed",
    message: "Order #1234 has been successfully completed.",
    time: "10 mins ago",
    read: true,
  },
  {
    id: 3,
    type: "warning",
    title: "Low Stock",
    message: "Product XYZ stock is running low.",
    time: "30 mins ago",
    read: false,
  },
  {
    id: 4,
    type: "error",
    title: "Payment Failed",
    message: "Payment for Order #5678 has failed.",
    time: "1 hour ago",
    read: false,
  },
];

const NotificationIcon = ({ type }) => {
  switch (type) {
    case "info":
      return <FaInfoCircle className="text-blue-500" />;
    case "success":
      return <FaCheckCircle className="text-green-500" />;
    case "warning":
      return <FaExclamationTriangle className="text-yellow-500" />;
    case "error":
      return <FaTimes className="text-red-500" />;
    default:
      return <FaInfoCircle className="text-gray-500" />;
  }
};

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const toggleRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, read: !notif.read } : notif
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Notifications
      </h1>

      {notifications.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
          No notifications
        </div>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notif) => (
            <li
              key={notif.id}
              className={`flex items-start gap-4 p-4 rounded-lg shadow-md transition-colors duration-300 ${
                notif.read
                  ? "bg-gray-200 dark:bg-gray-700"
                  : "bg-white dark:bg-gray-800"
              }`}
            >
              <div className="mt-1">
                <NotificationIcon type={notif.type} />
              </div>
              <div className="flex-1">
                <h3
                  className={`font-semibold ${
                    notif.read
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {notif.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {notif.message}
                </p>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                  {notif.time}
                </p>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <button
                  onClick={() => toggleRead(notif.id)}
                  className="px-2 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  {notif.read ? "Mark Unread" : "Mark Read"}
                </button>
                <button
                  onClick={() => deleteNotification(notif.id)}
                  className="px-2 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationsPage;

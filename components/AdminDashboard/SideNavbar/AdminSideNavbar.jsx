"use client";

import React from "react";
import {
  FaHome,
  FaShoppingCart,
  FaBoxOpen,
  FaThList,
  FaUsers,
  FaUserTie,
  FaChartLine,
  FaTags,
  FaCommentDots,
  FaCog,
  FaBell,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";
import AdminNavItem from "../AdminDashboardNavItem/AdminNavItem";

const AdminSideNavbar = () => {
  const navItems = [
    { to: "/admindashboard", label: "Dashboard", icon: FaHome },
    { to: "/admindashboard/orders", label: "Orders", icon: FaShoppingCart },
    { to: "/admindashboard/products", label: "Products", icon: FaBoxOpen },
    { to: "/admindashboard/categories", label: "Categories", icon: FaThList },
    { to: "/admindashboard/users", label: "Users", icon: FaUsers },
    { to: "/admindashboard/vendors", label: "Vendors", icon: FaUserTie },
    { to: "/admindashboard/analytics", label: "Analytics", icon: FaChartLine },
    {
      to: "/admindashboard/coupons",
      label: "Promotions / Coupons",
      icon: FaTags,
    },
    {
      to: "/admindashboard/reviews",
      label: "Reviews / Feedback",
      icon: FaCommentDots,
    },
    { to: "/admindashboard/settings", label: "Settings", icon: FaCog },
    {
      to: "/admindashboard/notifications",
      label: "Notifications",
      icon: FaBell,
      badge: 5,
    },
    {
      to: "/admindashboard/messages",
      label: "Messages",
      icon: FaEnvelope,
      badge: 3,
    },
    { to: "/logout", label: "Logout", icon: FaSignOutAlt },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-gray-900 border-r shadow-md flex flex-col">
      <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Admin Dashboard
        </h2>
      </div>
      <nav className="flex flex-col gap-1 px-1 py-4 flex-1 overflow-y-auto">
        {navItems.map((item, index) => (
          <AdminNavItem
            key={index}
            to={item.to}
            label={item.label}
            icon={item.icon}
            badge={item.badge || 0}
          />
        ))}
      </nav>
      <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Fahad
      </div>
    </aside>
  );
};

export default AdminSideNavbar;

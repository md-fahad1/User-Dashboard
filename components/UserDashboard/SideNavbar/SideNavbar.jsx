"use client";

import React from "react";
import {
  FaHome,
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaEnvelope,
  FaQuestionCircle,
  FaMoneyBillWave,
  FaCreditCard,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";
import UserDashboardNavItem from "../UserDashboardNavItem/UserDashboardNavItem";

const SideNavbar = () => {
  const navItems = [
    { to: "/userdashboard", label: "Dashboard", icon: FaHome },
    { to: "/userdashboard/orders", label: "My Orders", icon: FaShoppingCart },
    { to: "/userdashboard/wishlist", label: "Wishlist", icon: FaHeart },
    {
      to: "/userdashboard/notifications",
      label: "Notifications",
      icon: FaBell,
      badge: 3,
    },
    {
      to: "/userdashboard/messages",
      label: "Messages",
      icon: FaEnvelope,
      badge: 2,
    },
    { to: "/userdashboard/profile", label: "Profile", icon: FaUser },
    { to: "/userdashboard/settings", label: "Settings", icon: FaCog },
    {
      to: "/userdashboard/billing",
      label: "Billing & Payments",
      icon: FaMoneyBillWave,
    },
    {
      to: "/userdashboard/cards",
      label: "Payment Methods",
      icon: FaCreditCard,
    },
    {
      to: "/userdashboard/addresses",
      label: "Addresses",
      icon: FaMapMarkerAlt,
    },
    {
      to: "/userdashboard/security",
      label: "Security & 2FA",
      icon: FaShieldAlt,
    },
    {
      to: "/userdashboard/help",
      label: "Help & Support",
      icon: FaQuestionCircle,
    },
    { to: "/logout", label: "Logout", icon: FaSignOutAlt },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-gray-900 border-r shadow-md flex flex-col">
      <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          User Dashboard
        </h2>
      </div>
      <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
        {navItems.map((item, index) => (
          <UserDashboardNavItem
            key={index}
            to={item.to}
            label={item.label}
            icon={item.icon}
            badge={item.badge || 0}
          />
        ))}
      </nav>
      <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Dream Of Company
      </div>
    </aside>
  );
};

export default SideNavbar;

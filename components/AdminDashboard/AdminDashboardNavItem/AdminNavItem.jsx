"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminNavItem = ({ icon: Icon, label, to, badge }) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <Link
      href={to}
      className={`flex items-center justify-between gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
        isActive
          ? "bg-blue-600 text-white font-semibold"
          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon className="text-lg" />
        <span>{label}</span>
      </div>
      {badge > 0 && (
        <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-semibold">
          {badge}
        </span>
      )}
    </Link>
  );
};

export default AdminNavItem;

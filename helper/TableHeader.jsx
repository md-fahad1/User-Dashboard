"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
const TableHeader = ({
  title,
  subtitle,
  tabs = [],
  activeTab,
  onTabChange,
  onSearch,
  onAdd,
  onExport,
  onSettings,
  filters = [],
}) => {
  return (
    <div>
      {/* Header with title + buttons */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          {subtitle && (
            <p className="text-gray-600 flex items-center gap-2">{subtitle}</p>
          )}
        </div>

        <div className="flex items-center gap-3">
          {onExport && (
            <button
              onClick={onExport}
              className="px-4 py-2 text-gray-700 border rounded-md shadow-sm hover:bg-gray-50"
            >
              Export
            </button>
          )}
          {onAdd && (
            <button
              onClick={onAdd}
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
            >
              + Add
            </button>
          )}
          {onSettings && (
            <button
              onClick={onSettings}
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
            >
              Settings ⌄
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      {tabs.length > 0 && (
        <div className="flex items-center gap-6 mb-4 border-b pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => onTabChange(tab.label)}
              className={`text-sm font-medium ${
                activeTab === tab.label
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      )}

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        {/* Search */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearch?.(e.target.value)}
            className="w-full px-4 py-2 pl-10 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Dropdown Filters */}
        {filters.map((filter, idx) => (
          <select
            key={idx}
            className="px-4 py-2 border rounded-md"
            onChange={(e) => filter.onChange(e.target.value)}
          >
            {filter.options.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
};

export default TableHeader;

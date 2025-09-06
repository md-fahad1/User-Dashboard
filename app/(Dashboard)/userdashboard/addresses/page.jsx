"use client";

import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaTrashAlt,
  FaEdit,
  FaPlusCircle,
  FaCheckCircle,
} from "react-icons/fa";

const AddressPage = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      default: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      street: "456 Elm Street",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      default: false,
    },
  ]);

  const handleDelete = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            My Addresses
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your saved addresses for shipping and billing.
          </p>
        </div>

        {/* Address Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`bg-white dark:bg-gray-800 shadow rounded-lg p-5 relative hover:shadow-xl transition cursor-pointer`}
            >
              {addr.default && (
                <FaCheckCircle
                  className="absolute top-3 right-3 text-green-500"
                  title="Default Address"
                />
              )}
              <div className="flex items-center gap-3 mb-3">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {addr.name}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{addr.street}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {addr.city}, {addr.state} {addr.zip}
              </p>
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => alert("Edit address " + addr.id)}
                  className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(addr.id)}
                  className="flex items-center gap-1 text-red-500 hover:text-red-700 transition"
                >
                  <FaTrashAlt /> Delete
                </button>
              </div>
            </div>
          ))}

          {/* Add New Address Card */}
          <div
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-5 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition"
            onClick={() => alert("Add new address")}
          >
            <FaPlusCircle className="text-3xl text-blue-500 mb-2" />
            <span className="text-gray-700 dark:text-gray-200 font-semibold">
              Add New Address
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;

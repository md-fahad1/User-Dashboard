"use client";

import React, { useState } from "react";
import {
  FaCreditCard,
  FaPaypal,
  FaWallet,
  FaTrashAlt,
  FaCheckCircle,
} from "react-icons/fa";

const PaymentMethodsPage = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const paymentMethods = [
    {
      id: 1,
      type: "Credit/Debit Card",
      icon: FaCreditCard,
      details: "**** **** **** 1234",
    },
    { id: 2, type: "PayPal", icon: FaPaypal, details: "john@example.com" },
    { id: 3, type: "Wallet", icon: FaWallet, details: "Balance $150" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Payment Methods
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your saved payment methods, add new methods, or remove old
            ones.
          </p>
        </div>

        {/* Payment Method Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            const isSelected = selectedPayment === method.id;

            return (
              <div
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                className={`flex flex-col items-center p-6 border rounded-lg shadow cursor-pointer transition
                  hover:shadow-xl ${
                    isSelected
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
              >
                <Icon
                  size={36}
                  className={`mb-2 ${
                    isSelected
                      ? "text-blue-500"
                      : "text-gray-600 dark:text-gray-200"
                  }`}
                />
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  {method.type}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {method.details}
                </span>
                {isSelected && (
                  <FaCheckCircle className="text-green-500 mt-2" />
                )}
                <button
                  className="mt-3 text-red-500 hover:text-red-700 flex items-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Deleted ${method.type}`);
                  }}
                >
                  <FaTrashAlt /> Remove
                </button>
              </div>
            );
          })}
        </div>

        {/* Add New Payment */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Add New Payment Method
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Cardholder Name"
              className="p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none"
            />
            <input
              type="text"
              placeholder="MM/YY"
              className="p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none"
            />
            <input
              type="text"
              placeholder="CVC"
              className="p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="col-span-1 md:col-span-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Add Card
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsPage;

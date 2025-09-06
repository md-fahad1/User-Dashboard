"use client";

import React, { useState } from "react";
import {
  FaCreditCard,
  FaPaypal,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BillingPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("creditCard");

  const paymentMethods = [
    { id: "creditCard", label: "Credit/Debit Card", icon: FaCreditCard },
    { id: "paypal", label: "PayPal", icon: FaPaypal },
    { id: "wallet", label: "Wallet", icon: FaWallet },
  ];

  const recentInvoices = [
    { id: "INV-001", date: "2025-08-01", amount: "$120.00", status: "Paid" },
    { id: "INV-002", date: "2025-08-15", amount: "$75.00", status: "Pending" },
    { id: "INV-003", date: "2025-09-01", amount: "$250.00", status: "Paid" },
    { id: "INV-004", date: "2025-09-05", amount: "$60.00", status: "Failed" },
  ];

  const spendingData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Spending ($)",
        data: [200, 150, 300, 250, 400, 350],
        backgroundColor: "#38ada9",
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Billing & Payments
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your payment methods, view invoices, and track spending
          </p>
        </div>

        {/* Payment Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-green-400 to-green-600 p-5 rounded-lg shadow text-white flex flex-col items-center">
            <p className="text-sm">Total Paid</p>
            <p className="text-2xl font-bold mt-2">$4,520</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-5 rounded-lg shadow text-white flex flex-col items-center">
            <p className="text-sm">Pending</p>
            <p className="text-2xl font-bold mt-2">$320</p>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-5 rounded-lg shadow text-white flex flex-col items-center">
            <p className="text-sm">Wallet Balance</p>
            <p className="text-2xl font-bold mt-2">$150</p>
          </div>
        </div>

        {/* Monthly Spending Chart */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Monthly Spending
          </h2>
          <Bar
            data={spendingData}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
            }}
          />
        </div>

        {/* Payment Methods */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Payment Methods
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.id}
                  className={`flex flex-col items-center p-6 border rounded-lg cursor-pointer transition
                  hover:shadow-xl ${
                    selectedPayment === method.id
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                  onClick={() => setSelectedPayment(method.id)}
                >
                  <Icon
                    size={36}
                    className={`mb-2 ${
                      selectedPayment === method.id
                        ? "text-blue-500"
                        : "text-gray-600 dark:text-gray-200"
                    }`}
                  />
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    {method.label}
                  </span>
                  {selectedPayment === method.id && (
                    <FaCheckCircle className="text-green-500 mt-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Add New Payment Form */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Add New Card
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

        {/* Recent Invoices */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Recent Invoices
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-200 uppercase">
                    Invoice ID
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-200 uppercase">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-200 uppercase">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-200 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentInvoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                      {invoice.id}
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                      {invoice.date}
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                      {invoice.amount}
                    </td>
                    <td
                      className={`px-6 py-4 font-semibold ${
                        invoice.status === "Paid"
                          ? "text-green-600"
                          : invoice.status === "Pending"
                          ? "text-yellow-500"
                          : "text-red-600"
                      }`}
                    >
                      {invoice.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;

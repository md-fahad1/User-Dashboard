"use client";
import React, { useState } from "react";
import TableHeader from "@/helper/TableHeader"; // <-- import reusable header
import ViewEditDelete from "@/helper/ViewEditDelete";
import Pagination from "@/helper/pagination";

const orders = [
  {
    id: "ORD001",
    customer: "John Doe",
    email: "john@example.com",
    total: "$120.00",
    status: "Pending",
    date: "2025-09-07",
    image: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    email: "jane@example.com",
    total: "$75.50",
    status: "Completed",
    date: "2025-09-06",
    image: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: "ORD003",
    customer: "Mike Johnson",
    email: "mike@example.com",
    total: "$200.00",
    status: "Cancelled",
    date: "2025-09-05",
    image: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: "ORD004",
    customer: "Emily Davis",
    email: "emily@example.com",
    total: "$150.00",
    status: "Completed",
    date: "2025-09-04",
    image: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: "ORD005",
    customer: "Chris Brown",
    email: "chris@example.com",
    total: "$99.99",
    status: "Refunded",
    date: "2025-09-03",
    image: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: "ORD006",
    customer: "Sophia Wilson",
    email: "sophia@example.com",
    total: "$180.00",
    status: "Failed",
    date: "2025-09-02",
    image: "https://i.pravatar.cc/40?img=6",
  },
  {
    id: "ORD007",
    customer: "Daniel Martinez",
    email: "daniel@example.com",
    total: "$210.00",
    status: "Pending",
    date: "2025-09-01",
    image: "https://i.pravatar.cc/40?img=7",
  },
  {
    id: "ORD008",
    customer: "Olivia Anderson",
    email: "olivia@example.com",
    total: "$320.00",
    status: "Completed",
    date: "2025-08-31",
    image: "https://i.pravatar.cc/40?img=8",
  },
  {
    id: "ORD009",
    customer: "Matthew Thomas",
    email: "matthew@example.com",
    total: "$250.00",
    status: "Cancelled",
    date: "2025-08-30",
    image: "https://i.pravatar.cc/40?img=9",
  },
  {
    id: "ORD010",
    customer: "Isabella Taylor",
    email: "isabella@example.com",
    total: "$175.00",
    status: "Refunded",
    date: "2025-08-29",
    image: "https://i.pravatar.cc/40?img=10",
  },
  {
    id: "ORD011",
    customer: "David Lee",
    email: "david@example.com",
    total: "$140.00",
    status: "Completed",
    date: "2025-08-28",
    image: "https://i.pravatar.cc/40?img=11",
  },
  {
    id: "ORD012",
    customer: "Sophia White",
    email: "sophiaw@example.com",
    total: "$220.00",
    status: "Pending",
    date: "2025-08-27",
    image: "https://i.pravatar.cc/40?img=12",
  },
  {
    id: "ORD013",
    customer: "James Harris",
    email: "james@example.com",
    total: "$310.00",
    status: "Failed",
    date: "2025-08-26",
    image: "https://i.pravatar.cc/40?img=13",
  },
  {
    id: "ORD014",
    customer: "Mia Clark",
    email: "mia@example.com",
    total: "$270.00",
    status: "Completed",
    date: "2025-08-25",
    image: "https://i.pravatar.cc/40?img=14",
  },
  {
    id: "ORD015",
    customer: "Ethan Lewis",
    email: "ethan@example.com",
    total: "$330.00",
    status: "Pending",
    date: "2025-08-24",
    image: "https://i.pravatar.cc/40?img=15",
  },
];

const tabs = [
  { label: "All", count: 85472 },
  { label: "Pending Payment", count: 86 },
  { label: "Incomplete", count: 76 },
  { label: "Completed", count: 8759 },
  { label: "Refunded", count: 769 },
  { label: "Failed", count: 42 },
];

const ITEMS_PER_PAGE = 5; // Show 5 items per page

const OrderPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Map tabs to actual order statuses
  const tabStatusMap = {
    All: null,
    "Pending Payment": "Pending",
    Incomplete: "Incomplete",
    Completed: "Completed",
    Refunded: "Refunded",
    Failed: "Failed",
  };

  // Filter orders by tab
  const filteredOrders = orders.filter(
    (order) =>
      (!tabStatusMap[activeTab] || order.status === tabStatusMap[activeTab]) &&
      (order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);

  // Slice orders for pagination
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      case "Refunded":
        return "bg-purple-100 text-purple-800";
      case "Failed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <TableHeader
        title="Orders"
        subtitle="Manage all orders from your customers"
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setCurrentPage(1); // reset page
        }}
        onSearch={(val) => {
          setSearchTerm(val);
          setCurrentPage(1);
        }}
        onAdd={() => console.log("Add Order")}
        onExport={() => console.log("Export Orders")}
        onSettings={() => console.log("Settings Clicked")}
        filters={[
          {
            options: ["Payment Status", "Pending", "Completed", "Cancelled"],
            onChange: (val) => console.log("Filter Payment:", val),
          },
          {
            options: ["Completed", "Incomplete", "Refunded"],
            onChange: (val) => console.log("Filter Status:", val),
          },
          {
            options: ["More Filters", "Date", "Customer"],
            onChange: (val) => console.log("Filter More:", val),
          },
        ]}
      />

      {/* Orders Table */}
      <div className="bg-white shadow-lg rounded-md overflow-hidden mt-4">
        <table className="min-w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Total
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginatedOrders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 font-medium text-gray-700">
                  {order.id}
                </td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={order.image}
                    alt={order.customer}
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <span className="text-gray-800 font-medium">
                    {order.customer}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{order.email}</td>
                <td className="px-6 py-4 font-semibold text-gray-800">
                  {order.total}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold w-28 text-center ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{order.date}</td>
                <td className="px-6 py-4">
                  <ViewEditDelete
                    onView={() => console.log("View order")}
                    onEdit={() => console.log("Edit order")}
                    onDelete={() => console.log("Delete order")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default OrderPage;

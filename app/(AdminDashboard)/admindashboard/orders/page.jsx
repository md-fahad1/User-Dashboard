"use client";
import React, { useState } from "react";
import TableHeader from "@/helper/TableHeader";
import ViewEditDelete from "@/helper/ViewEditDelete";
import Pagination from "@/helper/pagination";
import DataTable from "@/helper/DataTable"; // ✅ import reusable table
import { orders, tabs, tabStatusMap } from "@/lib/data/orderData";
import { getStatusColor } from "@/utils/statusColors";

const ITEMS_PER_PAGE = 5;

const OrderPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      (!tabStatusMap[activeTab] || order.status === tabStatusMap[activeTab]) &&
      (order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

 const columns = [
  { key: "id", label: "Order ID", align: "left" },
  { key: "customer", label: "Customer", align: "left" },
  { key: "email", label: "Email", align: "left" },
  { key: "total", label: "Total", align: "left" },
  { key: "status", label: "Status", align: "center" },
  { key: "date", label: "Date", align: "left" },
  { key: "actions", label: "Actions", align: "center" }, // ✅ center this column
];

  const renderCell = (row, key) => {
    switch (key) {
      case "customer":
        return (
          <div className="flex items-center gap-3">
            <img
              src={row.image}
              alt={row.customer}
              className="w-10 h-10 rounded-full object-cover border"
            />
            <span className="text-gray-800 font-medium">{row.customer}</span>
          </div>
        );
      case "status":
        return (
          <span
            className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold w-28 text-center ${getStatusColor(
              row.status
            )}`}
          >
            {row.status}
          </span>
        );
      case "actions":
        return (
          <ViewEditDelete
          
            onView={() => console.log("View", row.id)}
            onEdit={() => console.log("Edit", row.id)}
            onDelete={() => console.log("Delete", row.id)}
          />
        );
      default:
        return row[key];
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
          setCurrentPage(1);
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
      <DataTable
        columns={columns}
        data={paginatedOrders}
        renderCell={renderCell}
      />
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

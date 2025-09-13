"use client";
import React, { useState } from "react";
import TableHeader from "@/helper/TableHeader"; // Reusable header
import ViewEditDelete from "@/helper/ViewEditDelete"; // Reusable actions
import Pagination from "@/helper/pagination";
import DataTable from "@/helper/DataTable";
import { products, tabs } from "@/lib/data/productData";
import { getStockColor } from "@/utils/stockColors";
const ITEMS_PER_PAGE = 5;
const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) => {
    const matchesTab = activeTab === "All" || product.stock === activeTab;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const columns = [
    { key: "image", label: "Image", align: "left" },
    { key: "name", label: "Name", align: "left" },
    { key: "category", label: "Category", align: "left" },
    { key: "price", label: "Price", align: "left" },
    { key: "stock", label: "Stock", align: "center" },
    { key: "actions", label: "Actions", align: "center" },
  ];
  const renderCell = (row, key) => {
    switch (key) {
      case "image":
        return (
          <img
            src={row.image}
            alt={row.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
        );
      case "stock":
        return (
          <span
            className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold w-28 text-center ${
              getStockColor?.(row.stock) || "bg-gray-100 text-gray-800"
            }`}
          >
            {row.stock}
          </span>
        );
      case "actions":
        return (
          <ViewEditDelete
            onView={() => console.log("View product", row.id)}
            onEdit={() => console.log("Edit product", row.id)}
            onDelete={() => console.log("Delete product", row.id)}
          />
        );
      default:
        return row[key];
    }
  };
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <TableHeader
        title="Products"
        subtitle="Manage all products in your store"
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onSearch={(val) => console.log("Search:", val)}
        onAdd={() => console.log("Add Product")}
        onExport={() => console.log("Export Products")}
        onSettings={() => console.log("Settings Clicked")}
        filters={[
          {
            options: ["Stock Status", "In Stock", "Low Stock", "Out of Stock"],
            onChange: (val) => console.log("Filter Stock:", val),
          },
          {
            options: ["Category", "Electronics", "Computers", "Accessories"],
            onChange: (val) => console.log("Filter Category:", val),
          },
        ]}
      />
      <DataTable
        columns={columns}
        data={paginatedProducts}
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

export default ProductPage;

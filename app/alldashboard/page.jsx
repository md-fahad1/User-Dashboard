"use client";
import React from "react";
import Link from "next/link";

const AllDashboard = () => {
  const dashboards = [
    {
      title: "User Dashboard",
      image: "https://img.freepik.com/free-vector/user-interface-concept-illustration_114360-1845.jpg",
      link: "/userdashboard",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Admin Dashboard",
      image: "https://img.freepik.com/free-vector/admin-concept-illustration_114360-2169.jpg",
      link: "/admindashboard",
      color: "from-green-500 to-emerald-600",
    },
    // {
    //   title: "Finance Dashboard",
    //   image: "https://img.freepik.com/free-vector/finance-dashboard-concept-illustration_114360-2563.jpg",
    //   link: "/financedashboard",
    //   color: "from-purple-500 to-pink-600",
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
        All Dashboards
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {dashboards.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            {/* Top image */}
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Bottom content */}
            <div className="p-5 text-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                {item.title}
              </h2>
              <div
                className={`h-1 w-16 mx-auto bg-gradient-to-r ${item.color} rounded-full`}
              ></div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center p-6">
              <span className="text-white text-sm font-medium">
                Click to open
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllDashboard;

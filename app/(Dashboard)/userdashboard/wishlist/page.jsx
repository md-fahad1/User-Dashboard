"use client";

import React from "react";
import {
  FaHeart,
  FaTrash,
  FaShoppingCart,
  FaStar,
  FaRegStar,
} from "react-icons/fa";

const WishlistPage = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$120",
      oldPrice: "$150",
      discount: "20%",
      rating: 4,
      image: "https://via.placeholder.com/200x200?text=Headphones",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$90",
      oldPrice: "$120",
      discount: "25%",
      rating: 5,
      image: "https://via.placeholder.com/200x200?text=Smart+Watch",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "$45",
      oldPrice: "$60",
      discount: "25%",
      rating: 3,
      image: "https://via.placeholder.com/200x200?text=Gaming+Mouse",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: "$80",
      oldPrice: "$100",
      discount: "20%",
      rating: 4,
      image: "https://via.placeholder.com/200x200?text=Keyboard",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Wishlist</h1>
        <p className="text-gray-600">Items you saved for future purchase.</p>
      </div>

      {/* Wishlist Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow hover:shadow-2xl transition-shadow p-4 relative flex flex-col items-center"
          >
            {/* Discount Badge */}
            <span className="absolute top-2 left-2 bg-pink-500 text-white px-2 py-1 rounded text-xs font-bold">
              {item.discount} OFF
            </span>

            {/* Wishlist Icon */}
            <button className="absolute top-2 right-2 text-red-500 bg-white p-1 rounded-full shadow hover:bg-red-100 transition-colors">
              <FaHeart />
            </button>

            <img
              src={item.image}
              alt={item.name}
              className="w-40 h-40 object-cover rounded-lg mb-4 hover:scale-105 transition-transform"
            />

            <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">
              {item.name}
            </h2>

            {/* Rating */}
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) =>
                i < item.rating ? (
                  <FaStar key={i} className="text-yellow-400" />
                ) : (
                  <FaRegStar key={i} className="text-gray-300" />
                )
              )}
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray-900 font-bold">{item.price}</span>
              <span className="line-through text-gray-400 text-sm">
                {item.oldPrice}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors">
                <FaShoppingCart /> Add to Cart
              </button>
              <button className="flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-2 rounded hover:bg-gray-300 transition-colors">
                <FaTrash /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {wishlistItems.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          Your wishlist is empty.
        </p>
      )}
    </div>
  );
};

export default WishlistPage;

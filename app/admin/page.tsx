"use client";
import React from "react";

export default function Dashboard() {
  const foodItems = [
    {
      id: 1,
      name: "Cheese Burger",
      category: "Fast Food",
      price: 450,
      status: "Published",
      image: "/foods/burger.jpg",
    },
    {
      id: 2,
      name: "Chicken Pizza",
      category: "Italian",
      price: 1200,
      status: "Published",
      image: "/foods/pizza.jpg",
    },
    {
      id: 3,
      name: "Biryani",
      category: "Desi",
      price: 350,
      status: "Draft",
      image: "/foods/biryani.jpg",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">All Published Food Items</h1>

      {/* Table Container */}
      <div className="bg-[#141B2E] rounded-2xl border border-gray-800 overflow-hidden shadow-lg">
        <table className="w-full text-left">
          <thead className="bg-[#1B2236] text-gray-300 uppercase text-sm">
            <tr>
              <th className="py-3 px-5">#</th>
              <th className="py-3 px-5">Image</th>
              <th className="py-3 px-5">Food Name</th>
              <th className="py-3 px-5">Category</th>
              <th className="py-3 px-5">Price</th>
              <th className="py-3 px-5">Status</th>
            </tr>
          </thead>

          <tbody>
            {foodItems.map((item, index) => (
              <tr
                key={item.id}
                className={`border-t border-gray-800 hover:bg-[#1C2438] transition-all duration-200 ${
                  item.status === "Published" ? "" : "opacity-80"
                }`}
              >
                <td className="py-4 px-5 text-gray-400">{index + 1}</td>
                <td className="py-4 px-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover border border-gray-700"
                  />
                </td>
                <td className="py-4 px-5 font-medium text-gray-100">{item.name}</td>
                <td className="py-4 px-5 text-gray-400">{item.category}</td>
                <td className="py-4 px-5 text-gray-300">Rs. {item.price}</td>
                <td className="py-4 px-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Published"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <p className="text-gray-400 text-sm">
        Total Items:{" "}
        <span className="text-white font-semibold">{foodItems.length}</span>
      </p>
    </div>
  );
}

"use client";
import React from "react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Example Stats Cards */}
        {[
          { title: "Total Orders", value: "152" },
          { title: "Active Foods", value: "34" },
          { title: "Revenue", value: "$2,340" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all border border-gray-100"
          >
            <h3 className="text-gray-500 text-sm">{item.title}</h3>
            <p className="text-2xl font-semibold text-gray-800 mt-2">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

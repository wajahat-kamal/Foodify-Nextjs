"use client";
import MenuItemDashboard from "@/components/dashboard/MenuItemDashboard";
import MenuItem from "@/components/MenuItem";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [foodItems, setFoodItems] = useState([]);

  const fetchFoodItems = async () => {
    const { data } = await axios.get("/api/menu");
    if (data.success) {
      setFoodItems(data.menus);
    }
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  return (
    <div className="space-y-4 px-2 sm:px-6 py-4 bg-gradient-to-b from-[#0B111E] to-[#0E1626] min-h-screen rounded-none sm:rounded-xl">
      {/* Title */}
      <div className="text-center space-y-1 sm:space-y-2">
        <h1 className="text-xl sm:text-4xl font-bold text-yellow-400 drop-shadow-md">
          All Food Items
        </h1>
        <p className="text-gray-400 text-[10px] sm:text-sm">
          Total Items:{" "}
          <span className="text-yellow-400 font-semibold">
            {foodItems.length}
          </span>
        </p>
      </div>

      {/* Table Container */}
      <div className="bg-[#0F1628]/80 backdrop-blur-md rounded-lg border border-gray-800 shadow-md overflow-hidden w-full">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[10px] sm:text-sm md:text-base">
            <thead className="bg-gradient-to-r from-[#1B2236] to-[#202A45] text-gray-300 uppercase tracking-wide text-[9px] sm:text-sm">
              <tr>
                <th className="py-2 px-2 sm:px-6">Image</th>
                <th className="py-2 px-2 sm:px-6">Name & Category</th>
                <th className="py-2 px-2 sm:px-6">Price</th>
                <th className="py-2 px-2 sm:px-6">Button</th>
              </tr>
            </thead>

            <tbody>
              {foodItems.map((item: any) => (
                <MenuItemDashboard item={item} key={item._id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

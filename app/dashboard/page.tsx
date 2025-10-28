"use client";
import MenuItemDashboard from "@/components/dashboard/MenuItemDashboard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Dashboard() {
  const [foodItems, setFoodItems] = useState<any[]>([]);

  const fetchFoodItems = async () => {
    try {
      const { data } = await axios.get("/api/menu");
      if (data.success) setFoodItems(data.menus);
    } catch (error) {
      toast.error("Failed to load menu items");
    }
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  const deleteItem = async (id: string | number) => {
    try {
      const { data } = await axios.delete(`/api/menu/${id}`);
      if (data.success) {
        setFoodItems((prev) => prev.filter((item) => item._id !== id))
        toast.success("Item deleted successfully");
      } else {
        toast.error("Failed to delete item");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

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

      {/* Table */}
      <div className="bg-[#0F1628]/80 backdrop-blur-md rounded-lg border border-gray-800 shadow-md overflow-hidden w-full">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[10px] sm:text-sm md:text-base">
            <thead className="bg-gradient-to-r from-[#1B2236] to-[#202A45] text-gray-300 uppercase tracking-wide text-[9px] sm:text-sm">
              <tr>
                <th className="py-2 px-2 sm:px-6">Image</th>
                <th className="py-2 px-2 sm:px-6">Name & Category</th>
                <th className="py-2 px-2 sm:px-6">Price</th>
                <th className="py-2 px-2 sm:px-6">Action</th>
              </tr>
            </thead>

            <tbody>
              {foodItems.map((item) => (
                <MenuItemDashboard
                  key={item._id}
                  item={item}
                  deleteItem={deleteItem}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

"use client";
import MenuItemDashboard from "@/components/dashboard/MenuItemDashboard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Dashboard() {
  const [foodItems, setFoodItems] = useState<any[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState<string | number | null>(null);

  // Fetch all items
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

  // Open confirmation modal
  const confirmDelete = (id: string | number) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  // Delete item after confirmation
  const deleteItem = async () => {
    if (!deleteId) return;
    try {
      const { data } = await axios.delete(`/api/menu/${deleteId}`);
      if (data.success) {
        setFoodItems((prev) => prev.filter((item) => item._id !== deleteId));
        toast.success("Item deleted successfully");
      } else {
        toast.error("Failed to delete item");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setShowConfirm(false);
      setDeleteId(null);
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
                  confirmDelete={confirmDelete} // 👈 yahan change
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-[#141B2E] text-white p-6 rounded-xl shadow-lg w-[90%] max-w-sm text-center border border-gray-700">
            <h2 className="text-lg font-bold text-yellow-400 mb-4">
              Confirm Deletion
            </h2>
            <p className="text-gray-300 mb-6">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={deleteItem}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold shadow-md"
              >
                Delete
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-semibold shadow-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

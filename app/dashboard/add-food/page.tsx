
import React from "react";

export default function AddFood() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Add New Food</h1>

      <form className="bg-[#141B2E] p-8 rounded-2xl shadow-md border border-gray-800 max-w-2xl space-y-5">
        <div>
          <label className="block text-gray-300 font-medium mb-1">Food Name</label>
          <input
            type="text"
            placeholder="Enter food name"
            className="w-full px-4 py-2 bg-[#0B111E] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-100 placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-300 font-medium mb-1">Price</label>
          <input
            type="number"
            placeholder="Enter price"
            className="w-full px-4 py-2 bg-[#0B111E] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-100 placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-300 font-medium mb-1">Image URL</label>
          <input
            type="text"
            placeholder="Enter image link"
            className="w-full px-4 py-2 bg-[#0B111E] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-100 placeholder-gray-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Add Food
        </button>
      </form>
    </div>
  );
}

"use client";
import React from "react";

export default function AddFood() {
  return (
    <div className="space-y-6 sm:space-y-8 p-4 sm:p-6">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-yellow-400">
        Add New Food
      </h1>

      {/* Form */}
      <form className="bg-[#0F1628] p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-800 max-w-xl space-y-5 ">
        {/* Food Name */}
        <div>
          <label className="block text-gray-300 font-medium mb-1 text-sm sm:text-base">
            Food Name
          </label>
          <input
            type="text"
            placeholder="Enter food name"
            className="w-full px-3 sm:px-4 py-2 bg-[#0B111E] border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-300 font-medium mb-1 text-sm sm:text-base">
            Price (Rs.)
          </label>
          <input
            type="number"
            placeholder="Enter price"
            className="w-full px-3 sm:px-4 py-2 bg-[#0B111E] border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-300 font-medium mb-1 text-sm sm:text-base">
            Category
          </label>
          <select
            className="w-full px-3 sm:px-4 py-2 bg-[#0B111E] border border-gray-700 rounded-lg text-gray-100 text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
          >
            <option value="">Select category</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Desi">Desi</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-300 font-medium mb-1 text-sm sm:text-base">
            Image URL
          </label>
          <input
            type="text"
            placeholder="Enter image link"
            className="w-full px-3 sm:px-4 py-2 bg-[#0B111E] border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2.5 sm:py-3 rounded-lg text-sm sm:text-base shadow-md hover:shadow-yellow-500/30 transition-all duration-300"
        >
          Add Food
        </button>
      </form>
    </div>
  );
}

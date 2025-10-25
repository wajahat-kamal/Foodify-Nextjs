"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function AddFood() {
  const [dataForm, setDataForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, price, category, image } = dataForm;

    if (!name || !price || !category || !image) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post("/api/menu", dataForm);

      if (data.success) {
        toast.success("Food item added successfully!");
        setDataForm({ name: "", price: "", category: "", image: "" });
      } else {
        toast.error("Failed to add food item");
      }
    } catch (error) {
      console.error("Error adding food item:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-3 sm:p-6">
      {/* Title */}
      <h1 className="text-xl sm:text-3xl font-bold text-yellow-400 text-center">
        Add New Food
      </h1>

      {/* Form */}
      <form
        onSubmit={onSubmitHandler}
        className="bg-[#0F1628] p-4 sm:p-8 rounded-lg sm:rounded-2xl shadow-md border border-gray-800 max-w-md mx-auto space-y-4 sm:space-y-5"
      >
        {/* Food Name */}
        <div>
          <label className="block text-gray-300 font-medium mb-1 text-xs sm:text-base">
            Food Name
          </label>
          <input
            type="text"
            name="name"
            value={dataForm.name}
            onChange={onChangeHandler}
            placeholder="Enter food name"
            className="w-full px-3 py-1.5 sm:py-2 bg-[#0B111E] border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 text-xs sm:text-base focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-300 font-medium mb-1 text-xs sm:text-base">
            Price (Rs.)
          </label>
          <input
            type="number"
            name="price"
            value={dataForm.price}
            onChange={onChangeHandler}
            placeholder="Enter price"
            className="w-full px-3 py-1.5 sm:py-2 bg-[#0B111E] border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 text-xs sm:text-base focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-300 font-medium mb-1 text-xs sm:text-base">
            Category
          </label>
          <select
            name="category"
            value={dataForm.category}
            onChange={onChangeHandler}
            className="w-full px-3 py-1.5 sm:py-2 bg-[#0B111E] border border-gray-700 rounded-md text-gray-100 text-xs sm:text-base focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
          >
            <option value="">Select category</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Desi">Desi</option>
            <option value="Pasta & Italian">Pasta & Italian</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-300 font-medium mb-1 text-xs sm:text-base">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={dataForm.image}
            onChange={onChangeHandler}
            placeholder="Enter image link"
            className="w-full px-3 py-1.5 sm:py-2 bg-[#0B111E] border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 text-xs sm:text-base focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading
              ? "bg-yellow-300 cursor-not-allowed"
              : "bg-yellow-400 hover:bg-yellow-500"
          } text-black font-semibold py-2 text-sm sm:text-base rounded-md shadow-md hover:shadow-yellow-500/30 transition-all duration-300`}
        >
          {loading ? "Adding..." : "Add Food"}
        </button>
      </form>
    </div>
  );
}

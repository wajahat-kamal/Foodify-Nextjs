"use client";
import React, { useState } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    id: 1,
    name: "Grilled Chicken Steak",
    category: "Desi",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    name: "Creamy Alfredo Pasta",
    category: "Pasta & Italian",
    price: "$14",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Classic Cheeseburger",
    category: "Fast Food",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    name: "Margherita Pizza",
    category: "Fast Food",
    price: "$16",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    name: "Sushi Platter",
    category: "Desi",

    price: "$22",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: "$10",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
  },
];

const categories = ["All", "Desi", "Fast Food", "Pasta & Italian", "Desserts"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMenu =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="menu"
      className="bg-[#0B111E] text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Our <span className="text-yellow-400">Menu</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
          Discover our chef’s special creations — where taste meets perfection
          and every bite tells a story.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-sm font-medium transition-all duration-300 border backdrop-blur-sm
      ${
        selectedCategory === category
          ? "bg-primary text-black border-primary shadow-md"
          : "border-gray-700 text-gray-300 hover:bg-yellow-400/10 hover:text-primary"
      }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-0 justify-center">
        {/* Left Menu */}
        <div className="overflow-auto flex justify-center md:justify-end">
          <table className="w-full md:w-[90%] border-collapse border border-gray-800 rounded-none md:rounded-l-2xl shadow-lg overflow-hidden bg-[#141B29]/50 backdrop-blur-sm">
            <tbody>
              {filteredMenu
                .filter((_, index) => index % 2 === 0)
                .map((item: any) => (
                  <MenuItem item={item} />
                ))}
            </tbody>
          </table>
        </div>

        {/* Right Menu */}
        <div className="overflow-auto flex justify-center md:justify-start">
          <table className="w-full md:w-[90%] border-collapse border border-gray-800 rounded-none md:rounded-r-2xl shadow-lg overflow-hidden bg-[#141B29]/50 backdrop-blur-sm">
            <tbody>
              {filteredMenu
                .filter((_, index) => index % 2 !== 0)
                .map((item: any) => (
                  <MenuItem item={item} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Menu;

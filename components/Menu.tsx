"use client";
import React, { useState } from "react";
import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: "Grilled Chicken Steak",
    category: "Main Course",
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
    category: "Main Course",
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

const categories = [
  "All",
  "Main Course",
  "Fast Food",
  "Pasta & Italian",
  "Desserts",
];

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
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm
              ${
                selectedCategory === category
                  ? "bg-yellow-400 text-black border-yellow-400 shadow-md"
                  : "border-gray-700 text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Table */}
      <div className="overflow-x-auto flex justify-center">
        <table className="w-[90%] md:w-[70%] border-collapse border border-gray-800 rounded-2xl shadow-lg overflow-hidden bg-[#141B29]/50 backdrop-blur-sm">
          <tbody>
            {filteredMenu.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-800 hover:bg-yellow-400/10 transition-all duration-300 text-xs sm:text-sm md:text-base"
              >
                {/* Image */}
                <td className="py-2 px-2 sm:py-3 sm:px-4">
                  <div className="relative w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>

                {/* Name & Category */}
                <td className="py-2 px-2 sm:py-3 sm:px-4 font-medium">
                  <div className="flex flex-col">
                    <span className="text-white text-sm sm:text-base md:text-lg font-semibold">
                      {item.name}
                    </span>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      {item.category}
                    </span>
                  </div>
                </td>

                {/* Price */}
                <td className="py-2 px-2 sm:py-3 sm:px-4 text-yellow-400 font-semibold text-sm sm:text-base text-center">
                  {item.price}
                </td>

                {/* Button */}
                <td className="py-2 px-2 sm:py-3 sm:px-4 text-center">
                  <button className="bg-yellow-400 text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-yellow-300 hover:scale-105 transition-transform duration-300">
                    Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Menu;

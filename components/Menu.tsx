"use client";
import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const categories = ["All", "Desi", "Fast Food", "Pasta & Italian", "Desserts", "Drinks"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuItems, setMenuItems] = useState([]);
  const router = useRouter();

  const fetchMenuItems = async () => {
    try {
      const { data } = await axios.get("/api/menu");

      if (data.success) {
        setMenuItems(data.menus);
      } else {
        toast.error("Failed to load menu items");
      }
    } catch (err) {
      console.error("Error fetching menu items:", err);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const filteredMenu =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item: any) => item.category === selectedCategory);

  const limitMenu = filteredMenu.slice(0, 10);

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
              {limitMenu
                .filter((_, index) => index % 2 === 0)
                .map((item: any) => (
                  <MenuItem item={item} key={item._id} />
                ))}
            </tbody>
          </table>
        </div>

        {/* Right Menu */}
        <div className="overflow-auto flex justify-center md:justify-start">
          <table className="w-full md:w-[90%] border-collapse border border-gray-800 rounded-none md:rounded-r-2xl shadow-lg overflow-hidden bg-[#141B29]/50 backdrop-blur-sm">
            <tbody>
              {limitMenu
                .filter((_, index) => index % 2 !== 0)
                .map((item: any) => (
                  <MenuItem item={item} key={item._id} />
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Full Menu Button */}
      <div className="text-center mt-4">
        <button
          onClick={() => router.push("/menu")}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all"
        >
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Menu;

"use client";
import React, { useEffect, useState } from "react";
import MenuItem from "@/components/MenuItem";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";

const categories = ["All", "Desi", "Fast Food", "Pasta & Italian", "Desserts"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuItems, setMenuItems] = useState([]);

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

  return (
    <section id="menu" className="bg-[#0B111E] text-white overflow-hidden">
      {/* Header Section */}
      <div
        className="relative h-64 sm:h-72 md:h-90 w-full bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: "url('header_img.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-[1px] z-0"></div>

        <Navbar />

        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
            Our <span className="text-yellow-400">Menu</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover our chef’s special creations — where taste meets perfection
            and every bite tells a story.
          </p>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 my-6 sm:my-8 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-sm font-medium transition-all duration-300 border backdrop-blur-sm
                  ${
                    selectedCategory === category
                      ? "bg-yellow-400 text-black border-yellow-400 shadow-md scale-105"
                      : "border-gray-700 text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400"
                  }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center my-6">
        {/* Left Menu */}
        <div className="overflow-auto flex justify-center md:justify-end">
          <table className="w-[95%] md:w-[90%] border-collapse border border-gray-800 rounded-none md:rounded-l-2xl shadow-xl overflow-hidden bg-[#141B29]/60 backdrop-blur-sm">
            <tbody>
              {filteredMenu
                .filter((_, index) => index % 2 === 0)
                .map((item: any) => (
                  <MenuItem item={item} key={item._id} />
                ))}
            </tbody>
          </table>
        </div>

        {/* Right Menu */}
        <div className="overflow-auto flex justify-center md:justify-start">
          <table className="w-[95%] md:w-[90%] border-collapse border border-gray-800 rounded-none md:rounded-r-2xl shadow-xl overflow-hidden bg-[#141B29]/60 backdrop-blur-sm">
            <tbody>
              {filteredMenu
                .filter((_, index) => index % 2 !== 0)
                .map((item: any) => (
                  <MenuItem item={item} key={item._id} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Menu;

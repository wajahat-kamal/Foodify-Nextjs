import { connectDB } from "@/lib/mongodb";
import Menu from "@/models/MenuItem";
import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";

interface MenuDetailProps {
  params: Promise<{ id: string }>;
}

export default async function MenuPage({ params }: MenuDetailProps) {
  const { id } = await params;

  await connectDB();
  const item = await Menu.findOne({ _id: id });

  if (!item) {
    return (
      <div className="min-h-screen bg-[#0B111E] text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-400 tracking-wide">
          Item not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B111E] text-white flex flex-col">
      {/* ===== Navbar / Logo ===== */}
      <header className="flex items-center gap-3 p-5 md:px-20 md:py-6">
        <a
          href="/"
          className="flex items-center gap-2 cursor-pointer group select-none"
        >
          <img
            src="/logo.svg"
            alt="Foodify"
            className="w-8 h-8 md:w-9 md:h-9 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <h1 className="text-2xl font-extrabold text-yellow-400 tracking-tight group-hover:text-yellow-300 transition-colors duration-300">
            FOODIFY
          </h1>
        </a>
      </header>

      {/* ===== Food Detail Section ===== */}
      <main className="flex flex-col md:flex-row items-center justify-center grow px-6 md:px-20 lg:px-32 py-12 gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative group">
          <div className="overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(255,204,0,0.15)] group-hover:shadow-[0_0_40px_rgba(255,204,0,0.35)] transition-all duration-500">
            <Image
              src={item.image}
              alt={item.name}
              width={600}
              height={400}
              className="w-full h-[320px] md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 leading-tight">
            {item.name}
          </h1>
          <p className="text-gray-400 text-xl uppercase tracking-wider font-medium">
            {item.category}
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            {item.description ||
              "A mouthwatering dish freshly prepared with authentic ingredients and rich flavors to satisfy your cravings."}
          </p>

          <div className="flex items-center gap-4 mt-4">
            <span className="bg-yellow-400 text-black px-5 py-2 rounded-full text-md font-semibold shadow-md">
              Rs {item.price}
            </span>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-2 rounded-full font-semibold text-md shadow-md hover:shadow-yellow-400/40 transition-all duration-300 transform hover:scale-105">
              Order Now
            </button>
          </div>
        </div>
      </main>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
}

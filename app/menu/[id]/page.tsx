import { connectDB } from "@/lib/mongodb";
import Menu from "@/models/MenuItem";
import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
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
      <div className="min-h-screen bg-[#0B111E] text-white flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-400">
            Item not found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B111E] text-white flex flex-col">
     
      {/* ===== Food Detail Section ===== */}
      <main className="flex flex-col md:flex-row items-center justify-center flex-grow px-6 md:px-20 py-16 gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2 relative group">
          <Image
            src={item.image}
            alt={item.name}
            width={600}
            height={400}
            className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl shadow-[0_0_20px_rgba(255,204,0,0.1)] group-hover:shadow-[0_0_30px_rgba(255,204,0,0.3)] transition-all duration-500"
          />
          <span className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            Rs {item.price}
          </span>
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 tracking-tight">
            {item.name}
          </h1>
          <p className="text-gray-400 text-sm uppercase tracking-wide">
            {item.category}
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            {item.description ||
              "A mouthwatering dish freshly prepared with authentic ingredients and rich flavors to satisfy your cravings."}
          </p>

          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all">
            Order Now
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

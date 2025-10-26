import { connectDB } from "@/lib/mongodb";
import Menu from "@/models/MenuItem";
import Image from "next/image";
import React from "react";

interface MenuDetailProps {
  params: {
    id: string;
  };
}

export default async function MenuPage({ params }: MenuDetailProps) {
  await connectDB();
  const item = await Menu.findOne({_id: params.id});

  if (!item) {
    return <h1 className="text-center text-white">Item not found</h1>;
  }

  return (
    <div className="min-h-screen bg-[#0B111E] text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-[#141B2E] border border-gray-700 rounded-2xl p-6 md:p-10 max-w-3xl w-full shadow-lg">
        <Image
          src={item.image}
          alt={item.name}
          width={500}
          height={300}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
        <p className="text-gray-400 mb-2">Category: {item.category}</p>
        <p className="text-yellow-400 font-semibold text-xl mb-4">
          Price: Rs {item.price}
        </p>
        <p className="text-gray-300 mb-6">
          {item.description || "Delicious and freshly made food!"}
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold w-full transition-all">
          Order Now
        </button>
      </div>
    </div>
  );
}

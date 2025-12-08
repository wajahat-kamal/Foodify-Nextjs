import { connectDB } from "@/lib/mongodb";
import Menu from "@/models/MenuItem";
import Image from "next/image";
import Footer from "@/components/Footer";
import OrderHandlerButton from "@/components/OrderHandlerButton";

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
          <Image
            src="/favicon.png"
            alt="Foodify"
            width={40}
            height={40}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <h1 className="text-2xl font-extrabold text-[#F0B100] tracking-tight group-hover:opacity-80 transition">
            FOODIFY
          </h1>
        </a>
      </header>

      {/* ===== Food Detail Section ===== */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10 px-6 md:px-20 py-10">
        {/* Large Food Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={400}
            className="w-full h-[260px] md:h-[350px] rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Food Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <span className="text-sm uppercase tracking-widest font-semibold text-[#F0B100] bg-[#F0B100]/20 px-3 py-1 rounded-md w-fit">
            {item.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {item.name}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            A delicious, freshly prepared dish made with high-quality
            ingredients — crafted to give you rich flavor and a satisfying
            experience every time.
          </p>

          <p className="text-3xl font-bold text-[#F0B100]">${item.price}</p>

         <OrderHandlerButton name={item.name}/>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
}

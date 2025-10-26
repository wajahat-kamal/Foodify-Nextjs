import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MenuItemType {
  _id: string | number;
  image: string;
  name: string;
  category: string;
  price: number;
}

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <tr
      className="border-t border-gray-800 hover:bg-yellow-400/10 transition-all duration-300
                 text-[10px] sm:text-xs md:text-sm
                 md:hover:shadow-[0_4px_20px_rgba(255,255,0,0.15)] md:hover:scale-[1.01]"
    >
      {/* Image */}
      <td className="py-2 px-2 md:px-4">
        <div className="relative w-12 h-10 sm:w-16 sm:h-12 md:w-24 md:h-16 rounded-lg overflow-hidden shadow-sm md:shadow-md md:hover:shadow-yellow-400/30 transition-all duration-300">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
      </td>

      {/* Name & Category */}
      <td className="py-2 px-2 md:px-4 font-medium">
        <div className="flex flex-col md:gap-1">
          <span className="text-white text-[11px] sm:text-sm md:text-base font-semibold leading-tight md:leading-snug">
            {item.name}
          </span>
          <span className="text-gray-400 text-[9px] sm:text-xs md:text-sm leading-tight">
            {item.category}
          </span>
        </div>
      </td>

      {/* Price */}
      <td className="py-2 px-2 md:px-4 text-yellow-400 font-semibold text-[11px] sm:text-sm md:text-base text-center md:text-left">
        Rs. {item.price}
      </td>

      {/* Button */}
      <td className="py-2 px-2 md:px-4 text-center">
        <Link href={`/menu/${item._id}`} className="bg-yellow-400/90 text-black px-3 py-1 rounded-full text-[9px] sm:text-xs md:text-sm font-semibold hover:bg-yellow-400 hover:scale-105 md:hover:scale-110 transition-transform duration-300 shadow-md md:shadow-yellow-400/20">
          View
        </Link>
      </td>
    </tr>
  );
};

export default MenuItem;

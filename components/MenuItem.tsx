import Image from "next/image";
import React from "react";

interface MenuItemType {
  id: string | number;
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
      key={item.id}
      className="border-t border-gray-800 hover:bg-yellow-400/10 transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
    >
      {/* Image */}
      <td className="py-2 px-2">
        <div className="relative w-12 h-10 sm:w-16 sm:h-12 md:w-20 md:h-14 rounded-md overflow-hidden shadow-sm">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
      </td>

      {/* Name & Category */}
      <td className="py-2 px-2 font-medium">
        <div className="flex flex-col">
          <span className="text-white text-[11px] sm:text-sm font-semibold leading-tight">
            {item.name}
          </span>
          <span className="text-gray-400 text-[9px] sm:text-xs leading-tight">
            {item.category}
          </span>
        </div>
      </td>

      {/* Price */}
      <td className="py-2 px-2 text-yellow-400 font-semibold text-[11px] sm:text-sm text-center">
        Rs. {item.price}
      </td>

      {/* Button */}
      <td className="py-2 px-2 text-center">
        <button className="bg-yellow-400/90 text-black px-3 py-1 rounded-full text-[9px] sm:text-xs font-medium hover:bg-yellow-400 hover:scale-105 transition-transform duration-300">
          Order
        </button>
      </td>
    </tr>
  );
};

export default MenuItem;

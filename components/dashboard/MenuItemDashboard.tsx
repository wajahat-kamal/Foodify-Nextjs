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
  confirmDelete: (id: string | number) => void;
}

const MenuItemDashboard: React.FC<MenuItemProps> = ({
  item,
  confirmDelete,
}) => {
  return (
    <tr
      className="border-t border-gray-800 hover:bg-yellow-400/10 transition-all duration-300 
    text-[9px] sm:text-xs md:text-sm"
    >
      {/* Image */}
      <td className="py-2 px-2">
        <div
          className="relative w-10 h-8 sm:w-14 sm:h-10 md:w-20 md:h-14 
        rounded-lg overflow-hidden shadow-sm md:shadow-md"
        >
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
        <span className="text-white text-[10px] sm:text-sm md:text-base font-semibold leading-tight">
          {item.name}
        </span>
        <span className="text-gray-400 block text-[8px] sm:text-xs md:text-sm leading-tight">
          {item.category}
        </span>
      </td>

      {/* Price */}
      <td
        className="py-2 px-2 text-yellow-400 font-semibold 
       text-[10px] sm:text-sm md:text-base text-center md:text-left"
      >
        ${item.price}
      </td>

      {/* Buttons */}
      <td className="py-2 px-2 text-center flex items-center gap-1 justify-center md:justify-start">
        <Link
          href={`/menu/${item._id}`}
          className="bg-yellow-400/90 text-black px-2 py-[2px] 
        rounded-full text-[8px] sm:text-xs md:text-sm font-semibold hover:bg-yellow-400 
        shadow-md transition-all"
        >
          View
        </Link>

        <button
          onClick={() => confirmDelete(item._id)}
          className="bg-red-500/90 text-white px-2 py-[2px] 
        rounded-full text-[8px] sm:text-xs md:text-sm font-semibold hover:bg-red-600 
        shadow-md transition-all"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MenuItemDashboard;

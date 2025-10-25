import React from "react";

export default function Dashboard() {
  const foodItems = [
    {
      id: 1,
      name: "Cheese Burger",
      category: "Fast Food",
      price: 450,
      status: "Published",
      image: "/foods/burger.jpg",
    },
    {
      id: 2,
      name: "Chicken Pizza",
      category: "Italian",
      price: 1200,
      status: "Published",
      image: "/foods/pizza.jpg",
    },
    {
      id: 3,
      name: "Biryani",
      category: "Desi",
      price: 350,
      status: "Draft",
      image: "/foods/biryani.jpg",
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 p-3 sm:p-6">
      {/* Title */}
      <h1 className="text-lg sm:text-3xl font-bold text-yellow-400 text-center">
        All Published Food Items
      </h1>

      {/* Table Container */}
      <div className="bg-[#0F1628] rounded-lg sm:rounded-2xl border border-gray-800 overflow-x-auto shadow-md">
        <table className="w-full text-left text-xs sm:text-base">
          <thead className="bg-[#1B2236] text-gray-300 uppercase text-[10px] sm:text-sm">
            <tr>
              <th className="py-2 px-2 sm:px-5">#</th>
              <th className="py-2 px-2 sm:px-5">Image</th>
              <th className="py-2 px-2 sm:px-5">Name</th>
              <th className="py-2 px-2 sm:px-5">Category</th>
              <th className="py-2 px-2 sm:px-5">Price</th>
              <th className="py-2 px-2 sm:px-5">Status</th>
            </tr>
          </thead>

          <tbody>
            {foodItems.map((item, index) => (
              <tr
                key={item.id}
                className={`border-t border-gray-800 hover:bg-[#1C2438]/70 transition-all duration-200 ${
                  item.status === "Published" ? "" : "opacity-75"
                }`}
              >
                <td className="py-2 px-2 sm:px-5 text-gray-400">{index + 1}</td>
                <td className="py-2 px-2 sm:px-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-8 h-8 sm:w-12 sm:h-12 rounded-md object-cover border border-gray-700"
                  />
                </td>
                <td className="py-2 px-2 sm:px-5 font-medium text-gray-100 text-[11px] sm:text-base">
                  {item.name}
                </td>
                <td className="py-2 px-2 sm:px-5 text-gray-400 text-[11px] sm:text-base">
                  {item.category}
                </td>
                <td className="py-2 px-2 sm:px-5 text-gray-300 text-[11px] sm:text-base">
                  Rs. {item.price}
                </td>
                <td className="py-2 px-2 sm:px-5">
                  <span
                    className={`px-2 py-[2px] sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-xs font-semibold ${
                      item.status === "Published"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-400/20 text-yellow-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <p className="text-gray-400 text-[11px] sm:text-sm text-center">
        Total Items:{" "}
        <span className="text-yellow-400 font-semibold">
          {foodItems.length}
        </span>
      </p>
    </div>
  );
}

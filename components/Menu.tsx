import React from "react";
import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: "Grilled Chicken Steak",
    description: "Juicy grilled chicken served with herbed butter and fresh vegetables.",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a130d7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    name: "Creamy Alfredo Pasta",
    description: "Rich, creamy Alfredo pasta tossed with garlic and parmesan.",
    price: "$14",
    image:
      "https://images.unsplash.com/photo-1605472560916-28c9b19b00f5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Classic Cheeseburger",
    description: "Smoky beef patty layered with cheese, lettuce, and signature sauce.",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    name: "Margherita Pizza",
    description: "Thin crust pizza topped with fresh mozzarella and basil.",
    price: "$16",
    image:
      "https://images.unsplash.com/photo-1600628422019-90e9dfdc01ae?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    name: "Sushi Platter",
    description: "Assorted sushi rolls crafted with premium fish and rice.",
    price: "$22",
    image:
      "https://images.unsplash.com/photo-1579888533509-8b1b3a6d6c85?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Warm molten chocolate cake served with vanilla ice cream.",
    price: "$10",
    image:
      "https://images.unsplash.com/photo-1606312619070-d0e5647ef8a4?auto=format&fit=crop&w=1000&q=80",
  },
];

const Menu = () => {
  return (
    <section
      id="menu"
      className="bg-[#0B111E] text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Our <span className="text-yellow-400">Menu</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
          Discover our chef’s special creations — where taste meets perfection and every bite tells a story.
        </p>
      </div>

      {/* Menu Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="group bg-[#101828] rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-500/10 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-yellow-400">{item.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-white">{item.price}</span>
                <button className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-yellow-500 hover:scale-105">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;

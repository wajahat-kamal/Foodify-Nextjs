import React from "react";
import Image from "next/image";
import brandImg from "@/assets/brand_img.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center container mx-auto px-6 py-20 md:px-16 lg:px-24 w-full overflow-hidden text-white bg-[#0B111E]"
    >
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B111E]/80 to-[#0B111E] pointer-events-none"></div>

      {/* Title */}
      <div className="relative text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          About{" "}
          <span className="underline underline-offset-4 decoration-primary font-light">
            Foodify
          </span>
        </h1>
        <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base">
          Where every flavor tells a story — crafted with love, passion, and
          perfection.
        </p>
      </div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-16">
        {/* Image */}
        <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center">
          <div className="relative group">
            <Image
              src={brandImg}
              alt="Foodify Restaurant Interior"
              className="w-full max-w-md rounded-2xl shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>
          </div>
        </div>

        {/* Text & Stats */}
        <div className="flex flex-col items-center md:items-start mt-6 md:mt-0 max-w-lg">
          {/* Description */}
          <p className="leading-relaxed text-gray-300 text-sm sm:text-base mb-4 text-center md:text-left">
            At <span className="text-primary font-semibold">Foodify</span>,
            we blend passion, creativity, and the freshest ingredients to craft
            dishes that delight every sense. More than just a restaurant, we’re
            a place where flavors inspire joy, moments turn into memories, and
            every bite reflects our commitment to excellence and warmth.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full mb-4">
            {[
              { num: "50+", label: "Signature Dishes" },
              { num: "10+", label: "Years of Taste" },
              { num: "5000+", label: "Happy Customers" },
              { num: "15+", label: "Expert Chefs" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center md:text-left hover:scale-105 transition-transform duration-300"
              >
                <p className="text-3xl sm:text-4xl font-semibold text-primary">
                  {stat.num}
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <a
            href="#menu"
            className="bg-primary/95 hover:bg-primary text-black font-semibold px-8 py-3 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-yellow-400/30"
          >
            Explore Our Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

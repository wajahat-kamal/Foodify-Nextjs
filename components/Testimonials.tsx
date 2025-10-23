"use client"

import React, { useRef } from "react";
import { assets, testimonialsData } from "../assets/assets.js";
import Image from "next/image.js";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.firstChild?.offsetWidth || 350; // auto-detect card width
    const scrollAmount = cardWidth + 24; // 24 = gap (gap-6 = 1.5rem)
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonials"
      className="bg-[#0B111E] text-white py-20 px-6 md:px-20 lg:px-32 overflow-hidden"
    >
      {/* ======= Heading ======= */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          What Our <span className="text-primary">Clients Say</span>
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-md mx-auto">
          Real stories from happy homeowners who trusted{" "}
          <span className="text-white/80 font-medium">Homify</span>
        </p>
      </div>

      {/* ======= Controller Header ======= */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Testimonials
        </h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-xl bg-gray-800/70 border border-gray-700 hover:bg-primary/30 hover:border-primary/40 backdrop-blur-sm transition-all duration-300"
          >
            <img
              src={assets.left_arrow}
              alt="Previous"
              className="w-4 h-4 sm:w-5 sm:h-5 invert"
            />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-xl bg-gray-800/70 border border-gray-700 hover:bg-primary/30 hover:border-primary/40 backdrop-blur-sm transition-all duration-300"
          >
            <img
              src={assets.right_arrow}
              alt="Next"
              className="w-4 h-4 sm:w-5 sm:h-5 invert"
            />
          </button>
        </div>
      </div>

      {/* ======= Testimonials Scroll Section ======= */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 py-4 scroll-smooth no-scrollbar"
      >
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[340px] bg-gradient-to-b from-[#111827] to-[#0d1320] flex flex-col items-center text-center p-8 rounded-2xl shadow-lg border border-white/10 hover:border-primary/50 hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
          >
            {/* User Image */}
            <Image
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-primary shadow-md mb-4"
            />

            {/* User Info */}
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-400 text-sm mb-3">{item.location}</p>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <Image
                    key={i}
                    src={assets.star_icon}
                    alt="star"
                    className="w-5 h-5"
                  />
                ))}
            </div>

            {/* Review */}
            <p className="text-gray-300 italic leading-relaxed text-sm sm:text-base">
              “{item.review}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

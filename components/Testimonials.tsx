"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  image: string;
  name: string;
  location: string;
  rating: number;
  review: string;
}

const testimonialsData: Testimonial[] = [
  {
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=400&q=80",
    name: "Daniel Lee",
    location: "Sydney, Australia",
    rating: 4,
    review:
      "The burgers were juicy and full of flavor! I also appreciated how quickly our order arrived, even on a busy night.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    name: "Emily Johnson",
    location: "Chicago, USA",
    rating: 4,
    review:
      "Great food, friendly staff, and fast service. The grilled salmon and fresh juices are a must-try!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=400&q=80",
    name: "Michael Brown",
    location: "Toronto, Canada",
    rating: 5,
    review:
      "Every visit feels special. The steak was perfectly cooked, and the chef even came to greet us. Highly recommended!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80",
    name: "Sophia Martinez",
    location: "New York, USA",
    rating: 5,
    review:
      "The food here is simply incredible! The pasta melted in my mouth and the ambience made it even more special. Definitely my new favorite restaurant!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=400&q=80",
    name: "Olivia Harris",
    location: "Dubai, UAE",
    rating: 5,
    review:
      "From the presentation to the taste, everything was perfect. The dessert section is a dream for anyone with a sweet tooth!",
  },
];

const MenuTestimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.firstChild
      ? (container.firstChild as HTMLElement).offsetWidth
      : 350;
    const scrollAmount = cardWidth + 24;

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
      {/* Heading */}
      <div className="text-center mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          What Our <span className="text-yellow-400">Customers Say</span>
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-md mx-auto">
          Real experiences from people who’ve enjoyed our food and hospitality.
        </p>
      </div>

      {/* Controller Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Customer Reviews
        </h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-xl bg-gray-800/70 border border-gray-700 
               hover:bg-yellow-400/20 hover:border-yellow-400/40 
               transition-all duration-300 text-yellow-400"
          >
            <ChevronLeft size={20} strokeWidth={2.2} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-xl bg-gray-800/70 border border-gray-700 
               hover:bg-yellow-400/20 hover:border-yellow-400/40 
               transition-all duration-300 text-yellow-400"
          >
            <ChevronRight size={20} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {/* Testimonials Scroll */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 py-4 scroll-smooth no-scrollbar"
      >
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[340px] bg-gradient-to-b from-[#111827] to-[#0d1320] flex flex-col items-center text-center p-8 rounded-2xl shadow-lg border border-white/10 hover:border-yellow-400/40 hover:shadow-yellow-400/10 transition-all duration-500 hover:-translate-y-2"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-yellow-400 shadow-md mb-4"
            />
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-400 text-sm mb-3">{item.location}</p>
            <div className="flex justify-center mb-4">
              {Array.from({ length: item.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-300 italic leading-relaxed text-sm sm:text-base">
              “{item.review}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuTestimonials;

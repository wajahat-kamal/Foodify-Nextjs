import React from "react";
import brandImg from "@/assets/brand_img.png";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center container mx-auto px-6 py-16 pt-20 md:px-16 lg:px-24 w-full overflow-hidden text-white"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
        About{" "}
        <span className="underline underline-offset-4 decoration-blue-500 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-400 max-w-md text-center mb-10 text-sm sm:text-base">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center md:items-end md:gap-20">
        {/* Image */}
        <Image
          src={brandImg}
          alt="Homify Brand"
          className="w-full sm:w-1/2 md:w-1/3 max-w-sm rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
        />

        {/* Text & Stats */}
        <div className="flex flex-col items-center md:items-start mt-10 md:mt-0">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 w-full 2xl:pr-20">
            {[
              { num: "10+", label: "Years of Excellence" },
              { num: "12+", label: "Projects Completed" },
              { num: "20+", label: "Mn. Sq. Ft. Delivered" },
              { num: "25+", label: "Ongoing Projects" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-semibold text-white">{stat.num}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="my-4 max-w-lg leading-relaxed text-center md:text-left text-gray-300 text-sm sm:text-base">
            Homify is redefining modern living with thoughtfully designed homes
            that combine elegance, comfort, and smart innovation. We transform
            every space into a dream home through exceptional design and
            craftsmanship — setting new benchmarks for contemporary living.
          </p>

          {/* Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header
      id="home"
      className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: "url('header_img.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-0"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 sm:px-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl inline-block max-w-3xl font-semibold pt-20 text-white drop-shadow-lg">
          Delight in Every Bite <span className="text-yellow-400 text-6xl">Welcome to Foodify</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <a
            href="#projects"
            className="border border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            className="bg-yellow-500 text-black px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-yellow-400 hover:scale-105"
          >
             Order Now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

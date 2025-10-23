import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header
      id="home"
      className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: "url('header_img.png')" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 px-6 sm:px-10">
        <h1 className="text-4xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 text-white">
          Explore homes that fit your dreams
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <a
            href="#projects"
            className="border border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
